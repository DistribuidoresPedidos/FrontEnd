import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { Router } from '@angular/router';
import { MdlDialogService } from '@angular-mdl/core';

@Component({
  templateUrl: './dealers.component.html',
  styleUrls: ['./dealers.component.scss']
})
export class DealersComponent implements OnInit {

  userType = localStorage['userType'];

  constructor(
    private authToken: Angular2TokenService,
    private router: Router,
    private dialogService: MdlDialogService
  ) { }

  ngOnInit() {
    console.log('dealers');
    console.log('User id: ' + localStorage['userId']);
  }

  logout() {
    this.authToken.signOut().subscribe(
      res => {
        localStorage['userId'] = '';
        this.router.navigateByUrl('/landing');
      },
      error => {
        let message = JSON.parse(error._body).errors.full_messages[0];
        this.dialogService.alert(message, 'Aceptar', 'Error');
      }
    );
  }

  goToProfile() {
    let userType = this.authToken.currentUserType.toLowerCase() + 's';
    this.router.navigate(['app', userType, localStorage['userId']]);
  }

  goToOrders() {
    this.router.navigate(['app', 'orders']);
  }

}
