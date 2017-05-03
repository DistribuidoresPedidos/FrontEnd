import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Comment } from '../../../classes/comment';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'distributor-comments',
  templateUrl: './distributor-comments.component.html',
  styleUrls: ['./distributor-comments.component.scss']
})
export class DistributorCommentsComponent implements OnInit {
  comments: Comment[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.comments = this.route.snapshot.data['distributorComments'].data;
  }

}
