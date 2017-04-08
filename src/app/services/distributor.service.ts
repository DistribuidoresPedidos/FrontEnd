import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Distributor } from '../classes/distributor';

@Injectable()
export class DistributorService {
  private distributorListUrl = 'http://infinite-river-92156.herokuapp.com/api/v1/distributors';

  constructor(private http: Http) { }


  getDistributors() {
    return this.http.get(this.distributorListUrl).map((response: Response) => response.json());
  }

  getDistributorById(id: number) {
    const url = `${this.distributorListUrl}/${id}`;
    return this.http.get(url).map((response: Response) => response.json());
  }
}
