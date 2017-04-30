import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RetailersListService } from '../services/retailers-list.service';
import { Retailer } from "../classes/retailer";
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-retailer-detail',
  templateUrl: './retailer-detail.component.html',
  styleUrls: ['./retailer-detail.component.scss']
})
export class RetailerDetailComponent implements OnInit {
  retailer :Retailer;
  constructor(private route :ActivatedRoute,private router :Router,private retailersListService:RetailersListService) { }

  ngOnInit() {
    this.retailer=this.route.snapshot.data.retailer.data;
    //console.log(this.retailer);
  }

}
