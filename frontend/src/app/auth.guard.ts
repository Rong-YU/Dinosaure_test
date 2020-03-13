import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router"
import { Injectable } from '@angular/core';
import { AuthService } from './services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService:AuthService, private router:Router){

    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        return this.checkLogin();
    }

    checkLogin(): boolean {

        const token = localStorage.getItem('session');
        console.log(token)
        if (token) { return true; }

        this.router.navigate(['/login']);
        return false;
    }

}