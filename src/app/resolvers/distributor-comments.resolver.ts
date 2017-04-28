import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { CommentService } from '../services/comment.service';

@Injectable()
export class DistributorCommentsResolver implements Resolve<any> {
  constructor(
    private commentService: CommentService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.commentService.getComments(route.params.id);
  }
}
