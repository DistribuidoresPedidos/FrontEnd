import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Product } from '../classes/product';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductListService } from '../services/products-list.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
   data={}

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productListService :ProductListService
  ) { }

  ngOnInit() {
   // this.product=this.route.snapshot;
   console.log(this.route.snapshot.data.product.data);
   this.data=this.route.snapshot.data.product.data;
  }
  
  getProductById(id){
      
      this.productListService.getProductById(id).subscribe(response =>{
        console.log(response);
      });
  }
 


  
  
}
