import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Product } from '../../../classes/product';

import { ProductListService } from '../../../services/products-list.service';
import { MakeOrderService} from '../../../services/make-order.service';

import { FilterOfferedProductsNamePipe } from '../../../pipes/filter-offered-products-name.pipe';
import { FilterOfferedProductsPricePipe } from '../../../pipes/filter-offered-products-price.pipe';
import { FilteredOfferedProductsCategoryPipe } from '../../../pipes/filtered-offered-products-category.pipe';


@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']

})
export class ProductListComponent implements OnInit {

  dataItems = [];
  filtername = '';
  filtercategory = [];
  filterprice = [0, 50];
  categoryList = ['cat1', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6', 'cat7', 'cat8', 'cat9', 'cat10'];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productListService: ProductListService,
    private makeOrderService: MakeOrderService
  ) { }

  ngOnInit() {
    this.dataItems = this.route.snapshot.data.dataItems.data;
    let $ = document.querySelector.bind(document);
    let nameInput = $('#nameInput');
    let nameObservable = Observable.fromEvent<any>(nameInput, 'input');
    nameObservable.debounceTime(200).subscribe(
      event => {
        let value = event.target.value;
        if (value === '') {
          value = '*';
        }
        this.productListService.getProducts(localStorage['userId'], value).subscribe(
          data => this.dataItems = data.data
        );
      }
    );
  }

  getUrl(photoUrl: string) {
    return `url(${photoUrl})`;
  }
}
