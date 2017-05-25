import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Angular2TokenService } from 'angular2-token';
import { MdlDialogService } from '@angular-mdl/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { OrdersService } from '../services/orders.service';

import { CartProduct } from '../classes/cartProduct';

import * as _ from 'underscore';

@Component({
  templateUrl: './dealers.component.html',
  styleUrls: ['./dealers.component.scss']
})

export class DealersComponent implements OnInit {

  userType = localStorage['userType'];
  currentUser: any = {};
  shoppingCart = false;
  cartProducts: CartProduct[] = [];
  totalPrice: number = 0;

  constructor(
    private authToken: Angular2TokenService,
    private router: Router,
    private dialogService: MdlDialogService,
    private shoppingCartService: ShoppingCartService,
    private ordersService: OrdersService
  ) { }

  ngOnInit() {
    this.getCartProducts();
    this.currentUser = this.authToken.currentUserData;
    console.log(this.currentUser.photo.url);
  }

  logout() {
    this.authToken.signOut().subscribe(
      res => {
        localStorage['userId'] = '';
        localStorage['shoppingCart'] = '';
        this.router.navigateByUrl('/landing');
      },
      error => {
        let message = JSON.parse(error._body).errors.full_messages[0];
        this.dialogService.alert(message, 'Aceptar', 'Error');
      }
    );
  }

  goToProfile() {
    let userType = this.userType.toLowerCase() + 's';
    this.router.navigate(['app', userType, localStorage['userId']]);
  }

  goToOrders() {
    this.router.navigate(['app', 'orders']);
  }

  openCart() {
    this.shoppingCart = true;
  }

  closeCart() {
    this.shoppingCart = false;
  }

  getPrice(product) {
    return product.price * product.quantity;
  }

  getTotalPrice() {
    let total = 0;
    this.cartProducts.forEach(
      item => total += this.getPrice(item)
    );
    return total;
  }

  getCartProducts() {
    this.shoppingCartService.getProducts().subscribe(
      res => {
        this.cartProducts = res;
        this.totalPrice = this.getTotalPrice();
        console.log(res);
      }
    );
  }

  askDelete(product){
    let result = this.dialogService.confirm(`¿Está seguro que desea eliminar el producto ${product.name} del carrito?`, 'No', 'Sí');
    result.subscribe( () => {
      this.deleteProduct(product);
    },
    (err: any) => {
      console.log('Fuck u');
    });
  }

  deleteProduct(product) {
   this.shoppingCartService.deleteProduct(product);
   this.totalPrice -= this.getPrice(product);
  }

  askEmpty() {
    let result = this.dialogService.confirm('¿Está seguro que desea vaciar el carrito?', 'No', 'Sí');
    result.subscribe( () => {
      this.emptyCart();
    },
    (err: any) => {
      console.log('Fuck u');
    });
  }

  emptyCart() {
    this.shoppingCartService.emptyCart();
    this.totalPrice = 0;
  }

  askOrder() {
    let result = this.dialogService.confirm('¿Está seguro que desea realizar el pedido?', 'No', 'Sí');
    result.subscribe( () => {
      this.makeOrder();
    },
    (err: any) => {
      console.log('Fuck u');
    });
  }

  makeOrder() {
    this.cartProducts.sort(
      (item1, item2) => item1.route - item2.route
    );
    let items = _.groupBy(this.cartProducts, 'route');
    let flag = true;

    for (let property in items) {
      if (items.hasOwnProperty(property)) {
        let _products = items[property].map(
          object => (({ offeredProduct, quantity }) => ({ offeredProduct, quantity }))(object)
        );
        let body = {
          'retailer_id': localStorage['userId'],
          'route_id': property,
          'products': _products
        };
        this.ordersService.createOrder(body).subscribe(
          response => {
            if (response.ok) {
              this.dialogService.alert('El pedido se realizó con éxito');
              this.shoppingCartService.emptyCart();
            } else {
              this.dialogService.alert('Hubo un error con el pedido');
            }
          }
        );
      }
    }
  }

}
