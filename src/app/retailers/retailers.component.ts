import { Component, OnInit } from '@angular/core';
import { RetailersListService } from '../services/retailers-list.service';
import { Retailer } from '../classes/retailer';

@Component({
  selector: 'app-retailers',
  templateUrl: './retailers.component.html',
  styleUrls: ['./retailers.component.scss']
})
export class RetailersComponent implements OnInit {
  retailers: Retailer[] = [];
  constructor(private retailersListService:RetailersListService) { }

  ngOnInit() {
    this.getRetailers();
  }
  getRetailers() {
    this.retailersListService.getRetailers().subscribe(response => {
      response.data.forEach(element => {
        this.retailers.push(element);
      });
    });
  }
}
