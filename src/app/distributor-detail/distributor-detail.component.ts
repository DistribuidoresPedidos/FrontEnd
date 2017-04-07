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

  distributor: Distributor;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: DistributorService
  ) {

  }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => this.service.getDistributorById()).subscribe((distributor: Distributor) => this.distributor = distributor);
    console.log(this.distributor);
  }

}
