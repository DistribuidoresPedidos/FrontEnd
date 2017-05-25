import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private authToken: Angular2TokenService,
        private router: Router
    ) {
    }

    canActivate() {
        if (this.authToken.userSignedIn()) {
            this.router.navigate(['app']);
            return true;
        }
        this.router.navigate(['landing']);
        return false;
    }
}
