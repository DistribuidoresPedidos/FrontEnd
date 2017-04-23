import { Component, OnInit } from '@angular/core';
import { RetailersListService } from '../services/retailers-list.service';
import { Retailer } from '../classes/retailer';
import { ActivatedRoute , Router } from "@angular/router";

@Component({
  selector: 'app-retailers',
  templateUrl: './retailers.component.html',
  styleUrls: ['./retailers.component.scss']
})
export class RetailersComponent implements OnInit {
  retailers: Retailer[] = [];
  constructor(private route :ActivatedRoute,private router :Router,private retailersListService:RetailersListService) { }

  ngOnInit() {
    this.retailers=this.route.snapshot.data.retailers.data;
    //console.log(this.route.snapshot.data.retailers.data);
    //this.getRetailers();
  }
  getRetailers() {
    this.retailersListService.getRetailers().subscribe(response => {
      response.data.forEach(element => {
        this.retailers.push(element);
      });
    });
  }
  getUrl(photoUrl: string) {
    return `url(${photoUrl})`;
  }
}
