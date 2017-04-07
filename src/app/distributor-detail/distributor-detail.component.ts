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
  id: number;
  private sub: any;

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
    this.distributorService.getDistributorById(3).subscribe((distributor: Distributor) => console.log(distributor));
  }

}
