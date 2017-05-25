import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { Http, Response,Headers, RequestOptions, BaseRequestOptions , RequestOptionsArgs,RequestMethod} from '@angular/http';
import { Router } from '@angular/router';
import { MdlDialogService } from '@angular-mdl/core';
import {ImageUploadModule} from "angular2-image-upload";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],

})

export class RegisterComponent implements OnInit {

  name = '';
  email = '';
  phoneNumber = '';
  password = '';
  passwordConfirmation = '';
  userType = '';
  public file;
  public data_post: FormData;
  public url;
/*
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
  res => {
    this.router.navigate(['app']);
  },
  error => {
    let message = JSON.parse(error._body).errors.full_messages[0];
    this.dialogService.alert(message, 'Aceptar', 'Error en registro');
  }*/
  constructor(
    private authToken: Angular2TokenService,
    private router: Router,
    private dialogService: MdlDialogService
  ) { }

  ngOnInit() {
  }
  signUp() {

      this.data_post = new FormData();
      this.data_post.append('name', this.name );
      this.data_post.append('photo', this.file);
      this.data_post.append('email', this.email);

      this.data_post.append('phoneNumber', this.phoneNumber);
      this.data_post.append('latitude', '4.636370');
      this.data_post.append('longitude', '-74.082970');
      this.data_post.append('password', this.password);
      this.data_post.append('password_confirmation', this.passwordConfirmation);
      if(this.userType=='Retailer'){
        this.url='retai_path'
      }else{
        this.url='distri_path'
      }
      var basicOptions:RequestOptionsArgs = {



  headers: new Headers({}),
  body: this.data_post
};
var reqOptions = new RequestOptions(basicOptions);


      let head = new Headers({});
      let options = new RequestOptions({ });

    this.authToken.post(
     this.url,
      this.data_post,basicOptions
    ).map( res=> { this.router.navigate(['app'])});
  }
  imageUploaded($event){
    this.file= $event.file;
  }
}
