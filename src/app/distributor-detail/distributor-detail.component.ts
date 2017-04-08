import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Distributor } from '../classes/distributor';
import 'rxjs/add/operator/switchMap';

import { DistributorService } from '../services/distributor.service';

@Component({
  selector: 'app-distributor-detail',
  templateUrl: './distributor-detail.component.html',
  styleUrls: ['./distributor-detail.component.scss']
})
export class DistributorDetailComponent implements OnInit {

  distributorAddress: String;
  distributor: Distributor;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private distributorService: DistributorService
  ) {

  }

  ngOnInit() {
    this.distributor = this.route.snapshot.data['distributor'].data;
    this.distributorAddress = this.route.snapshot.data['distributorAddress'];
  }

}
