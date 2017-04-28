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

    constructor(private http: Http) { }

    getComments(id: number): Observable<Comment[]> {
        const url = `${this.commentsUrl}/${id}/comments`;
        return this.http.get(url).map((response: Response) => response.json())
    }
}
