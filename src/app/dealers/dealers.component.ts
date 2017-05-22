import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Angular2TokenService } from 'angular2-token';
import { MdlDialogService } from '@angular-mdl/core';
import { ShoppingCartService } from '../services/shopping-cart.service';

import { CartProduct } from '../classes/cartProduct';

@Component({
  templateUrl: './dealers.component.html',
  styleUrls: ['./dealers.component.scss']
})

export class DealersComponent implements OnInit {

  userType = localStorage['userType'];
  shoppingCart = false;
  cartProducts: CartProduct[] = [];

  constructor(
    private authToken: Angular2TokenService,
    private router: Router,
    private dialogService: MdlDialogService,
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
    this.getCartProducts();
  }

  logout() {
    this.authToken.signOut().subscribe(
      res => {
        localStorage['userId'] = '';
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

  getCartProducts() {
    this.shoppingCartService.getProducts().subscribe(
      res => {
        this.cartProducts = res;
        console.log(res);
      }
    );
  }

  deleteProduct(product) {
   this.shoppingCartService.deleteProduct(product);
  }

  emptyCart() {
    this.shoppingCartService.emptyCart();
  }

}
