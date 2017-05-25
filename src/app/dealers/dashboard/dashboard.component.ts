import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductListService } from '../../services/products-list.service';
import { RetailersListService } from '../../services/retailers-list.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userType = localStorage['userType'];
  mostBuyed = [];
  mostSelled = [];
  favourites = [];
  myProducts = [];

  config: Object = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    loop: true,
    speed: 400,
    slidesPerView: 2
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductListService,
    private retailerService: RetailersListService
  ) { }

  ngOnInit() {
    if (this.userType === 'RETAILER') {
      this.productService.getMostBuyedProducts(localStorage['userId']).subscribe(
        response => {
          this.mostBuyed = response.data;
          console.log(this.mostBuyed);
        }
      );
      this.retailerService.getRetailerFavourites(localStorage['userId']).subscribe(
        response => {
          this.favourites = response.data;
          console.log(this.favourites);
        }
      );
    } else {
      this.productService.getMostSelledProducts(localStorage['userId']).subscribe(
        response => {
          this.mostSelled = response.data;
          console.log(this.mostSelled);
        }
      );
      this.productService.getDistributorProducts(localStorage['userId']).subscribe(
        response => {
          this.myProducts = response.data;
          console.log(this.myProducts);
        }
      )
    }
  }

  getUrl(photoUrl: string) {
    return `url(${photoUrl})`;
  }

}
