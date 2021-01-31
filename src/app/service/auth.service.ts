

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BASE_URL } from '../constant/base-url';

@Injectable()
export class AuthService {

    jwtHelper = new JwtHelperService();

    constructor(private http: HttpClient) { }

    public login(model: any) {
        return this.http.post(BASE_URL + 'my-account/login', model)
            .pipe(
                map((response: any) => {
                    let data = response;
                    let user = data.data;
                    if (user != null) {
                        const tokenStr = 'Bearer ' + user.token;
                        localStorage.setItem('token', tokenStr);
                        sessionStorage.setItem('permissions', JSON.stringify(user.permissions));
                    }
                })
            );
    }

    public loggedIn() {
        const token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    }

    public getToken(): string {
        return localStorage.getItem('token');
    }

    public logout() {
        localStorage.removeItem('token');
        sessionStorage.clear();
    }
}
