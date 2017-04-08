import { Component } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Location],
  
 // directives: [ROUTER_DIRECTIVES] 
})
export class AppComponent {
  location: Location;
  constructor(location: Location) { this.location = location; }
}
