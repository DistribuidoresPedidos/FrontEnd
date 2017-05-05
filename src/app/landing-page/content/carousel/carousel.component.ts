import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MdlDialogService } from '@angular-mdl/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  email = '';
  password = '';
  userType = '';

  config: Object = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    loop: true,
    speed: 400,
    autoplay: 5000
  };

  constructor(
    private authToken: Angular2TokenService,
    private router: Router,
    private dialogService: MdlDialogService
    ) { }

  ngOnInit() {
  }

  signIn() {
    this.authToken.signIn({email: this.email, password: this.password, userType: this.userType}).subscribe(

        res => {
          this.router.navigate(['app']);
        },
        error => {
          let message = JSON.parse(error._body).errors[0];
          this.dialogService.alert(message, 'Aceptar', 'Error iniciando sesión');
        }
    )
  }

}
