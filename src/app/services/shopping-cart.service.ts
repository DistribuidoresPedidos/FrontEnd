import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { CartProduct } from '../classes/cartProduct';

@Injectable()
export class ShoppingCartService {

    products: CartProduct[];

    constructor(
        private http: Http
    ) {
        if (localStorage['shoppingCart'] === '') {
            this.products = [];
        } else {
            this.products = JSON.parse(localStorage['shoppingCart'])
        }
    }

    getProducts(): Observable<CartProduct[]> {
        return Observable.of(this.products);
    }

    addProduct(product: CartProduct) {
        if (localStorage['shoppingCart'] === '') {
            this.products = [product];
        } else {
            this.products.push(product);
        }
        localStorage.setItem('shoppingCart', JSON.stringify(this.products));
    }

    deleteProduct(product: CartProduct) {
        let index = this.products.indexOf(product);
        this.products.splice(index, 1);
        localStorage.setItem('shoppingCart', JSON.stringify(this.products));
    }

    emptyCart() {
        this.products.length = 0;
        localStorage.setItem('shoppingCart', JSON.stringify(this.products));
    }
}
