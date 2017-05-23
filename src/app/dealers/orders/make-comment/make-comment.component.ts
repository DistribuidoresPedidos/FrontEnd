import { Component, OnInit ,OnDestroy} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { ActivatedRoute , Router } from "@angular/router";
import { OrdersService } from '../../../services/orders.service';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/Rx';
@Component({
  selector: 'app-make-comment',
  templateUrl: './make-comment.component.html',
  styleUrls: ['./make-comment.component.scss']
})
export class MakeCommentComponent implements OnInit , OnDestroy{
  title  :  string;
  content : string;
  calification : number;
  order_id :number ;
  response={};
  selectedorder:any;
  subscription : Subscription;
/*  resp :{
    "title": "Arroz de plastico ",
    "content": "muy malo",
    "calification": 1,
    "order_id": 1
}*/
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private orderService : OrdersService
  ) {  
    console.log("Constructor");
/*    this.orderService.getOrderSubject().subscribe((value)=>{
      console.log("value",value);
       this.selectedorder=value;
  });*/
  this.selectedorder=this.orderService.getOrderSubject();
  }

  ngOnInit() {
  console.log("selectedOrder",this.selectedorder.data)
  }

  addOrder(body : any) :Observable<any>{
    if (!body){ return;}
    this.orderService.createComment(body,this.order_id).subscribe();
  }

  createResponse(){
    this.response['title']=this.title;
    this.response['content']=this.content;
    this.response['calification']=this.calification;
    this.response['order_id']=this.order_id;
    console.log(this.response);
  }
  ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
