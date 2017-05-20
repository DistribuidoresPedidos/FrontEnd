import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { Product } from '../../../classes/product';
import { Retailer } from '../../../classes/retailer';
import { Coordinate } from "../../../classes/Coordinate";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductListService } from '../../../services/products-list.service';
import { RetailersListService } from '../../../services/retailers-list.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-productd-retailer',
  templateUrl: './productd-retailer.component.html',
  styleUrls: ['./productd-retailer.component.scss']
})
export class ProductdRetailerComponent implements OnInit {
  distributorNear;
  retailer: Retailer;
  lat: number;
  lng: number;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productListService: ProductListService,
    private retailerService: RetailersListService

  ) { }

  ngOnInit() {
    this.distributorNear = this.route.snapshot.data.user.data;
    this.retailer = this.route.snapshot.data.retailerCoordinate.data;
    this.lat= this.retailer.latitude;
    this.lng=this.retailer.longiude;
    var _this = this;
    this.directionsRendererDirective['initialized$'].subscribe(function(directionsRenderer) {
       _this.directionsRenderer = directionsRenderer;
   });


  }

}
