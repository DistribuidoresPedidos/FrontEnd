import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
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
  public file;
  //xmlhttpRequest
  public data_post: FormData;

  public disableSelectCategories :boolean= false;

  public categories: string[]

  distributor_id = localStorage['userId']

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
  imageUploaded($event){
    this.file= $event.file;
  }

  onSubmit(){
    this.data_post = new FormData();
    this.data_post.append('offered_product[photo]', this.file);
    this.data_post.append('offered_product[price]', this.price.toString() );
    this.data_post.append('offered_product[distributor_id]', this.distributor_id );

    this.data_post.append('product[name]', this.name);
    this.data_post.append('product[weight]', this.weight.toString());
    this.data_post.append('product[category]', this.category_select);

    this.productListService.createProduct(this.data_post).subscribe(
      res => this.router.navigate(['app', 'products', res.data.id])

    );

  }


  saveProduct(model: Product, isValidProd: Boolean){

  }
  saveOfferedProduct(model: OfferedProduct, isValidOffeP: Boolean){

  }

}
