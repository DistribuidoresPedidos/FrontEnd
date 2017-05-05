import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { ActivatedRoute , Router } from "@angular/router";
import { OrdersService } from '../../../services/orders.service';
@Component({
  selector: 'app-make-order',
  templateUrl: './make-order.component.html',
  styleUrls: ['./make-order.component.scss']
})
export class MakeOrderComponent implements OnInit {
retailer_id : number;
route_id:number;
products = new Array();
response={};
counter = 1;
/*  resp={
     retailer_id:1, 
     route_id:2,
     products:[{offeredProduct:1 , quantity:3},{offeredProduct:2 , quantity:1}]
    };*/
   postData: string;
   errorMessage ;

   constructor(
    private route: ActivatedRoute,
    private router: Router,
    private makeOrderService : OrdersService) { }


  ngOnInit() {
    // set up products field
    for(let i =0;i<this.counter;i++){
      this.products[i]= new Object();
    }
        //this.addOrder(this.response);
  }
  ngOnChange(){
    console.log(this.retailer_id);
  }
  addOrder(body : any) :Observable<any>{
    if (!body){ return;}
    
    this.makeOrderService.createOrder(body).subscribe();
  }

  createResponse(){
   this.response['retailer_id']=this.retailer_id;
   this.response['route_id']=this.route_id;
  
   
   this.response['products']=this.products;
   this.addOrder(this.response);

   console.log(this.response);

  }
  reset(){
    this.counter++;
    this.products[this.counter-1]= new Object();
   this.response['products']=this.products;
  }
}



/*  
  CODE FROM ANGULAR.IO 
private extractData(res: Response) {
    let bodyResponse = res.json();
    console.log( "response "+bodyResponse);
    return bodyResponse.data || { };
  }*/


/*  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }*/