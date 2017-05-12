import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Product } from '../../../classes/product';
import { OfferedProduct } from '../../../classes/offeredProduct';

import { ProductListService } from '../../../services/products-list.service';
//class

// const URL = '/api/';
const URL = 'http://infinite-river-92156.herokuapp.com/api/v1';
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  //variables
  public product: Product
  public offeredProduct: OfferedProduct
  public price: number
  public name: string
  public weight: number
  public category_select: string

  public uploader;
  public hasBaseDropZoneOver:boolean = false;
  public disableSelectCategories :boolean= false;

  distributor_id = localStorage['userId']
  public categories: string[]

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productListService: ProductListService,
  ) { }




  ngOnInit() {
    console.log('products-create');

    this.categories= this.route.snapshot.data.categories
    console.log(this.categories);

    //nameObservable.debounceTime(200).subscribe(
  }

  newCategory(){
    return this.disableSelectCategories;
  }

  saveProduct(model: Product, isValidProd: Boolean){

  }
  saveOfferedProduct(model: OfferedProduct, isValidOffeP: Boolean){

  }

}
