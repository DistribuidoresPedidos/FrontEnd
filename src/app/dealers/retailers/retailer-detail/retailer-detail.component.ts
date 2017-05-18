import { Component, OnInit, HostListener } from '@angular/core';
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
  distributorId: number;
  page :number = 1;
  constructor(
  	private route: ActivatedRoute,
  	private router: Router,
  	private retailersListService: RetailersListService
  ) { }

  ngOnInit() {
    this.retailer = this.route.snapshot.data.retailer.data;
    this.coordinates = this.route.snapshot.data.coordinates.data;
  }

  openInfoWindow(event, coordinate){
    console.log(coordinate);
    this.distributorId = coordinate.distributor.id;
    var marker = event.target;
    marker.ng2MapComponent.openInfoWindow(coordinate.id, marker, {
          lat: marker.getPosition().lat(),
          lng: marker.getPosition().lng(),
      });
  }

  @HostListener('document:click', ['$event'])
  onDocumentClicked(ev) {
      if(ev.target.innerText === "Ver"){
        this.router.navigate(['app','distributors',this.distributorId]);
        console.log(this.distributorId);
      }
  }

}
