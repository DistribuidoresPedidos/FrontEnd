import { Component, OnInit } from '@angular/core';
import { RetailersListService } from '../../../services/retailers-list.service';
import { Retailer } from '../../../classes/retailer';
import { ActivatedRoute , Router } from "@angular/router";

@Component({
  selector: 'app-retailers-list',
  templateUrl: './retailers-list.component.html',
  styleUrls: ['./retailers-list.component.scss']
})
export class RetailersListComponent implements OnInit {
  retailers: Retailer[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private retailersListService: RetailersListService
  ) { }

  ngOnInit() {
    this.retailers=this.route.snapshot.data.retailers.data;
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
