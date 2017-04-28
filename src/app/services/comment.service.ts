import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Comment } from '../classes/comment';

@Injectable()
export class CommentService {
    private commentsUrl = 'http://infinite-river-92156.herokuapp.com/api/v1/distributors';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getComments(id: number): Observable<Comment[]> {
        const url = `${this.commentsUrl}/${id}/comments`;
        return this.http.get(url, {headers: this.headers})
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        var comment: Comment[] = res.json()['data'];
        console.log("asd" + comment)
	    return comment;
  	}

  	private handleError (error: any) {
	    let errMsg = (error.message) ? error.message :
	      error.status ? `${error.status} - ${error.statusText}` : 'Server   error';
	    return Observable.throw(errMsg);
  	}

}
