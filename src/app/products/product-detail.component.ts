import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {

  constructor( 
  		private route: ActivatedRoute,
  		private router: Router
  	) { }

  ngOnInit() {
  	let id = this.route.snapshot.params['id'];
  	if(!id) return;

  	console.log(id);
  }

}
