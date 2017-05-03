import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-dealers',
  templateUrl: './dealers.component.html',
  styleUrls: ['./dealers.component.scss']
})
export class DealersComponent implements OnInit {

  constructor(
    private _tokenService: Angular2TokenService
  ) { }

  ngOnInit() {
    console.log('dealers');
  }

  logout() {
    this._tokenService.signOut().subscribe(
      res => console.log(res),
      error => console.log(error)
    );
  }

}
