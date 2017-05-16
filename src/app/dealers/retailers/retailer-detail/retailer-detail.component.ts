import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RetailersListService } from '../../../services/retailers-list.service';
import { Retailer } from "../../../classes/retailer";
import { Distributor } from "../../../classes/distributor";
import { Coordinate } from "../../../classes/Coordinate";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-retailer-detail',
  templateUrl: './retailer-detail.component.html',
  styleUrls: ['./retailer-detail.component.scss']
})
export class RetailerDetailComponent implements OnInit {

  retailer: Retailer;
  coordinates: Coordinate[];
  distributor: Distributor;
  selectedCoordinate: Coordinate;
  page :number = 1;
  constructor(
  	private route: ActivatedRoute,
  	private router: Router,
  	private retailersListService: RetailersListService
  ) { }

  ngOnInit() {
    this.retailer = this.route.snapshot.data.retailer.data;
    this.coordinates = this.route.snapshot.data.coordinates.data;
    this.selectedCoordinate = this.coordinates[0];
  }
  onClickCoordinate(coordinate, event){
    this.selectedCoordinate = coordinate;   
    this.openInfoWindow(event);
  }

  openInfoWindow(event) : void {
    console.log(event.target);
    var marker = event.target;
    marker.ng2MapComponent.openInfoWindow('iw', marker, {
          lat: marker.getPosition().lat(),
          lng: marker.getPosition().lng(),
      });
  }
  

}
