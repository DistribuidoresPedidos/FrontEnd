import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Product } from '../../../classes/product';
import { OfferedProduct } from '../../../classes/offeredProduct';
import { ProductListService } from '../../../services/products-list.service';

@Component({
  selector: 'app-productd-distributor',
  templateUrl: './productd-distributor.component.html',
  styleUrls: ['./productd-distributor.component.scss']
})
export class ProductdDistributorComponent implements OnInit {

  public processing;
  public departed;
  public delivered;

  public lineChartData:Array<any> = [
   [65, 59, 80, 81, 56, 55, 40],
   [28, 48, 40, 19, 86, 27, 90]
  ];
 public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
 public lineChartType:string = 'line';
 public pieChartType:string = 'pie';

 // Pie
 public pieChartLabels:string[] = ['En-salida', 'En-proceso', 'Entregado'];
 public pieChartData:number[];

 constructor(
   private router: Router,
   private route: ActivatedRoute,
   private productListService: ProductListService,

 ) { }

 ngOnInit() {
   this.processing=  this.route.snapshot.data.productProcessing.data;
   this.delivered = this.route.snapshot.data.user.data;
   this.departed = this.route.snapshot.data.productDeparted.data;

   var n_processing= this.processing.length;
   var n_departed= this.departed.length;
   var n_delivered= this.delivered.length;

   this.pieChartData= [n_departed, n_processing, n_delivered ];
   console.log(this.processing.length);
   console.log(this.departed);
   console.log(this.delivered);
 }

 public randomizeType():void {
   this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
   this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
 }

 public chartClicked(e:any):void {
   console.log(e);
 }

 public chartHovered(e:any):void {
   console.log(e);
 }



}
