import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Product } from '../../../classes/product';
import { Retailer } from '../../../classes/retailer';
import { Coordinate } from "../../../classes/Coordinate";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductListService } from '../../../services/products-list.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-productd-retailer',
  templateUrl: './productd-retailer.component.html',
  styleUrls: ['./productd-retailer.component.scss']
})
export class ProductdRetailerComponent implements OnInit {
  retailer : Retailer;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productListService: ProductListService

  ) { }

  ngOnInit() {
    this.retailer = this.route.snapshot.data.user.data;
    console.log(this.retailer);
  }

}
