import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Product } from '../classes/product';
import { ProductListService } from '../services/products-list.service';
import { FilterOfferedProductsNamePipe } from '../pipes/filter-offered-products-name.pipe';
import { ActivatedRoute , Router } from "@angular/router";
import { MakeOrderService} from '../services/make-order.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']

})
export class ProductListComponent implements OnInit {
   dataItems = [];
   filtername = "";
   filtercategory = [];
   filterprice = [0,50];
   categoryList = ["cat7","cat9","cat10"];
   //resp = `"retailer_id":1,route_id":1,products":[{"offeredProduct":1,"quantity":3},{"offeredProduct":2,"quantity":1}],totalPrice":30`;
   resp={
     retailer_id:1, 
     route_id:2,
     products:[{offeredProduct:1 , quantity:3},{offeredProduct:2 , quantity:1}]
    };
   postData:string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productListService: ProductListService,
    private makeOrderService : MakeOrderService) { }

  ngOnInit() {
    this.dataItems = this.route.snapshot.data.dataItems.data;
    this.addOrder(this.resp);
    
  }
  getProducts() {

    this.productListService.getProducts().subscribe(response => {
      response.data.forEach(element => {
        this.dataItems.push(element);
      });
    });

  }
  

  getUrl(photoUrl: string) {
    return `url(${photoUrl})`;
  }

  addOrder(body : any){
    if (!body){ return;}
    
    this.makeOrderService.createOrder(body).subscribe(response =>{
         this.postData=JSON.stringify(response);
         console.log(this.postData);
    }

    );

  }
}
