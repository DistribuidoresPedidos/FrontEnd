import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { ActivatedRoute , Router } from "@angular/router";
import { MakeOrderService} from '../services/make-order.service';
@Component({
  selector: 'app-make-order',
  templateUrl: './make-order.component.html',
  styleUrls: ['./make-order.component.scss']
})
export class MakeOrderComponent implements OnInit {
//resp = `"retailer_id":1,route_id":1,products":[{"offeredProduct":1,"quantity":3},{"offeredProduct":2,"quantity":1}],totalPrice":30`;
   resp={
     retailer_id:1, 
     route_id:2,
     products:[{offeredProduct:1 , quantity:3},{offeredProduct:2 , quantity:1}]
    };
   postData: string;
   errorMessage ;

   constructor(
    private route: ActivatedRoute,
    private router: Router,
    private makeOrderService : MakeOrderService) { }


  ngOnInit() {
        this.addOrder(this.resp);
  }
  addOrder(body : any) :Observable<any>{
    if (!body){ return;}
    
    this.makeOrderService.createOrder(body).subscribe();
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