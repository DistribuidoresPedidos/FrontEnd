import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  name = '';
  email = '';
  phoneNumber = '';
  password = '';
  passwordConfirmation = '';
  userType = '';

  constructor(private authToken: Angular2TokenService, private router: Router) { }

  ngOnInit() {
  }
  signUp() {
    this.authToken.registerAccount({
      name: this.name,
      email: this.email,
      phoneNumber: this.phoneNumber,
      photo:"http://www.michiganduckrescueandsanctuary.com/wp-content/uploads/2014/12/marold_donate_transparent_504.png",
      latitude: "4.636370",
      longitude: " -74.082970",
      password: this.password,
      passwordConfirmation: this.passwordConfirmation,
      userType: this.userType
    }).subscribe(
      res => this.router.navigateByUrl(''),
      error => alert(error)
    )
  }
}
