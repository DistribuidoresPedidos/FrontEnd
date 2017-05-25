import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductListService } from '../../services/products-list.service';
import { RetailersListService } from '../../services/retailers-list.service';
import { DistributorsService } from '../../services/distributors.service';

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
    slidesPerView: 2,
    effect: 'coverflow',
    autoplay: 3000,
    centeredSlides: true,
    spaceBetween: 5
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductListService,
    private retailerService: RetailersListService,
    private distributorsService: DistributorsService
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

  addFavorite(distributor) {
    this.distributorsService.addFavorite(distributor.id).subscribe(
          msg => {
            if(msg.msg === 'Favorite removed'){
              var index = this.findIndex(distributor);
              console.log(index);
              this.favourites.splice(index, 1);
              console.log('¡Removido de tus favoritos!');
            }
            else if(msg.data){
              var index = this.findIndex(distributor);
              this.favourites[index].favorite = true;
              console.log("Se ha añadido a favoritos");
            }
          }
      );
  }

  findIndex(distributor){
    for(var i=0; i<this.favourites.length; i++)
      if(this.favourites[i].distributor.id === distributor.id)
        return i;
  }

}
