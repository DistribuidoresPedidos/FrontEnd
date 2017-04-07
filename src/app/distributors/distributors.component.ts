import { Component, OnInit } from '@angular/core';
import { DistributorService } from '../services/distributor.service';
import { Distributor } from '../classes/distributor';


@Component({
  selector: 'app-distributors',
  templateUrl: './distributors.component.html',
  styleUrls: ['./distributors.component.scss']
})
export class DistributorsComponent implements OnInit {

  distributors: Distributor[] = [];

  constructor( private distributorService: DistributorService) {
   }

  ngOnInit() {
    this.getDistributors();
  }

  getDistributors() {
    this.distributorService.getDistributors().subscribe(data => data.forEach(element => {this.distributors.push(element); } ));
  }
}
