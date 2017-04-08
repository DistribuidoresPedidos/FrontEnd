import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Product } from './product';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductListService } from "../services/products-list.service";
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
	products1: Product[] = [];
	id: number;

	constructor(
		private route: ActivatedRoute,
	    private router: Router,
	    private productListService :ProductListService
	) { }

	ngOnInit() {
		this.route.params.subscribe(params => {this.id = +params['id']; });
    	this.getProductsById(this.id);
	}

	getProductsById( id: number ){
		let product: Product[] = [];
		this.productListService.getProductById(id).subscribe(data => product.push(data));
		this.products1 = product;
		console.log(product);
	}

}
