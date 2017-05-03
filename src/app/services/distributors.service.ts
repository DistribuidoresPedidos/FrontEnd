import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Distributor } from '../classes/distributor';
import { Comment } from '../classes/comment';

@Injectable()
export class DistributorsService {
  private distributorsUrl = 'http://infinite-river-92156.herokuapp.com/api/v1/distributors';

  constructor(private http: Http) { }


  getDistributors() {
    return this.http.get(this.distributorsUrl).map((response: Response) => response.json());
  }

  getDistributorById(id: number) {
    const url = `${this.distributorsUrl}/${id}`;
    return this.http.get(url).map((response: Response) => response.json());
  }

  getComments(id: number): Observable<Comment[]> {
      const url = `${this.distributorsUrl}/${id}/comments`;
      return this.http.get(url).map((response: Response) => response.json());
  }
}
