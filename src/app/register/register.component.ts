import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from "angular2-token";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authToken: Angular2TokenService) { }

  ngOnInit() {
    this.authToken.signOut().subscribe(
          res =>      console.log(res),
          error =>    console.log(error)
    )
  }

}
