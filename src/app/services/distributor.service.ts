import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Distributor } from '../classes/distributor';

@Injectable()
export class DistributorService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private distributorListUrl = 'http://localhost:3000/api/v1/distributors';

  constructor(private http: Http) { }


  getDistributors(): Observable<Distributor[]> {
    return this.http.get(this.distributorListUrl, { headers: this.headers })
      .map(this.extractData)
      .catch(this.handleError);
  }

  getDistributorById(id: number): Observable<Distributor> {
    const url = `${this.distributorListUrl}/${id}`;
    return this.http.get(url, { headers: this.headers })
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server   error';
    return Observable.throw(errMsg);
  }

}