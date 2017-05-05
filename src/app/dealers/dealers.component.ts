import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { Router } from '@angular/router';
import { MdlDialogService } from '@angular-mdl/core';

@Component({
  templateUrl: './dealers.component.html',
  styleUrls: ['./dealers.component.scss']
})
export class DealersComponent implements OnInit {

  constructor(
    private authToken: Angular2TokenService,
    private router: Router,
    private dialogService: MdlDialogService
  ) { }

  ngOnInit() {
    console.log('dealers');
  }

  logout() {
    this.authToken.signOut().subscribe(
      res => {
        this.router.navigateByUrl('/')
      },
      error => {
        let message = JSON.parse(error._body).errors.full_messages[0];
        this.dialogService.alert(message, 'Aceptar', 'Error');
      }
    );
  }

}
