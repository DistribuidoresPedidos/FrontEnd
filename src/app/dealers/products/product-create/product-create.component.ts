import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Product } from '../../../classes/product';

import { ProductListService } from '../../../services/products-list.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  categories;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productListService: ProductListService,
  ) { }

  ngOnInit() {
    console.log('products-create');
  }

}
