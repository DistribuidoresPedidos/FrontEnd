import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Distributor } from '../classes/distributor';

@Injectable()
export class DistributorService {
  private distributorListUrl = 'http://localhost:3000/api/v1/distributors';

  constructor(private http: Http) { }


  getDistributors() {
    return this.http.get(this.distributorListUrl).map((response: Response) => response.json());
  }

  getDistributorById(id: number) {
    return this.http.get(this.distributorListUrl + '/' + id).map((response: Response) => response.json());
  }

}
