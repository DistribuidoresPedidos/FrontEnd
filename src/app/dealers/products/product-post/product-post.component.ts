import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Product } from '../../../classes/product';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductListService } from '../../../services/products-list.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-product-post',
  templateUrl: './product-post.component.html',
  styleUrls: ['./product-post.component.scss']
})
export class ProductPostComponent implements OnInit {
   data={}

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productListService :ProductListService
  ) { }

  ngOnInit() {
   // this.product=this.route.snapshot;
   console.log("post product");

  }
}
