import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Distributor } from '../../../classes/distributor';
import 'rxjs/add/operator/switchMap';

@Component({
  templateUrl: './distributor-detail.component.html',
  styleUrls: ['./distributor-detail.component.scss']
})
export class DistributorDetailComponent implements OnInit {

  distributorAddress: String;
  distributor: Distributor;
  distributorComments=[];
  page : number =1;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {

  }

  ngOnInit() {
    console.log(this.route.snapshot.data);
    this.distributor = this.route.snapshot.data['distributor'].data;
    this.distributorAddress = this.route.snapshot.data['distributorAddress'];
    this.distributorComments= this.route.snapshot.data.distributorComments.data;
  }

}
