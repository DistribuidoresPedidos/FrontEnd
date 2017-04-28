import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Comment } from '../classes/comment';
import 'rxjs/add/operator/switchMap';

import { CommentService } from '../services/comment.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  errorMessage: string;
  comments: Comment[] = [];
  css: string;
  @Input()
  distributor: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private commentService: CommentService
  ) { }

  ngOnInit() {
    this.getComments(this.distributor);
  }

  getComments(distributor: number){
  	this.commentService.getComments(distributor)
  		.subscribe(
        cosa => {
          this.comments = cosa;
        },
        error => this.errorMessage = <any>error
      );
    console.log("ahorasi " + this.css);
  }

}
