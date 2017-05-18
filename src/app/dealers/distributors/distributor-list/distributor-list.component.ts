import { Component, OnInit } from '@angular/core';
import { Distributor } from '../../../classes/distributor';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-distributor-list',
  templateUrl: './distributor-list.component.html',
  styleUrls: ['./distributor-list.component.scss']
})
export class DistributorListComponent implements OnInit {
  page :number =1;
  distributors: Distributor[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authToken: Angular2TokenService
  ) { }

  ngOnInit() {
    this.distributors = this.route.snapshot.data['distributors'].data;
    

  }

  getUrl(photoUrl: string) {
    return `url(${photoUrl})`;
  }

}
