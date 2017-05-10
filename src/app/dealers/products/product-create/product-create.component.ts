import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Product } from '../../../classes/product';
import { OfferedProduct } from '../../../classes/offeredProduct';

import { ProductListService } from '../../../services/products-list.service';
//class

import {FileUploader} from 'ng2-file-upload/ng2-file-upload'

// const URL = '/api/';
const URL = 'https://localhost:3000/api/v1';
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

  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
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
  //FileUploader
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

  saveProduct(model: Product, isValidProd: Boolean){

  }
  saveOfferedProduct(model: OfferedProduct, isValidOffeP: Boolean){

  }

}
