import { Component, OnInit } from '@angular/core';
import { DistributorService } from '../services/distributor.service';
import { Distributor } from '../classes/distributor';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-distributors',
  templateUrl: './distributors.component.html',
  styleUrls: ['./distributors.component.scss']
})
export class DistributorsComponent implements OnInit {

  distributors: Distributor[];

  constructor(
    private distributorService: DistributorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.distributors = this.route.snapshot.data['distributors'].data;
  }

  getUrl(photoUrl: string) {
    return `url(${photoUrl})`;
  }
}
