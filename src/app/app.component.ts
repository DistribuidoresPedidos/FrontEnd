import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Angular2TokenService } from 'angular2-token';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Location]
})

export class AppComponent {
  location: Location;

  constructor(private _tokenService: Angular2TokenService, location: Location) {
    this._tokenService.init({
      apiPath: 'http://infinite-river-92156.herokuapp.com/api/v1',
      signInPath: 'sign_in',
      signInRedirect: '/register',
      registerAccountPath: '',
      userTypes: [
        { name: 'DISTRIBUTOR', path: 'distri_path'},
        { name: 'RETAILER', path: 'retai_path'}
      ]
    });
    this.location = location;
  }
}
