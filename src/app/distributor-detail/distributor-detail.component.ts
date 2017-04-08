import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Distributor } from '../classes/distributor';
import * as NodeGeocoder from 'node-geocoder';
import 'rxjs/add/operator/switchMap';

import { DistributorService } from '../services/distributor.service';

@Component({
  selector: 'app-distributor-detail',
  templateUrl: './distributor-detail.component.html',
  styleUrls: ['./distributor-detail.component.scss']
})
export class DistributorDetailComponent implements OnInit {

  options = {
    provider: 'google',
    httpAdapter: 'https',
    apiKey: 'AIzaSyCzikUZvUagG1tusaTczWY7AR8qtPyISFs',
    formatter: null
  };
  geocoder = NodeGeocoder(this.options);
  distributorAddress;

  distributor: Distributor = new Distributor(null, '', '', '', '', null, null);
  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private distributorService: DistributorService
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {this.id = +params['id']; });
    this.getDistributor(this.id);
  }

  getDistributor(id: number) {
    this.distributorService.getDistributorById(id).subscribe(response => {
      this.distributor = response.data;
    }, error => console.log(error), () => this.getAddress());
  }

  getAddress() {
    this.distributorAddress = this.geocoder.reverse({ lat: this.distributor.latitude, lon: this.distributor.longitude })
      .then(function (res) {
        this.distributorAddress = res[0];
        console.log(this.distributorAddress);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

}
