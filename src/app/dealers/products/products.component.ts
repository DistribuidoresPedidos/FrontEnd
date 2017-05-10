import { Component, OnInit } from '@angular/core';
import { MDL } from './MaterialDesignLiteUpgradeElement';



@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],


})

export class ProductsComponent implements OnInit {
  ngOnInit(){
    console.log("products");
  }
}
