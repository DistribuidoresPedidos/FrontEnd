import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { Router } from '@angular/router';

@Component({
  templateUrl: './dealers.component.html',
  styleUrls: ['./dealers.component.scss']
})
export class DealersComponent implements OnInit {

  constructor(
    private authToken: Angular2TokenService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log('dealers');
  }

  logout() {
    this.authToken.signOut().subscribe(
      res => this.router.navigateByUrl('/'),
      error => console.log(error)
    );
  }

}
