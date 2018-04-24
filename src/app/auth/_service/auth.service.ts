import { API_POST_LOGIN } from './../../_const/api.const';
import { Auth, Login } from './../_model/auth.model';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';



@Injectable()
export class AuthService {
  private auth: Auth;
  // private user: User;
  private authenticatedHeaders: HttpHeaders;

  constructor(public httpClient: HttpClient, private router: Router) {
    if (sessionStorage.getItem('Auth')) {
      this.auth = JSON.parse(sessionStorage.getItem('Auth'));
      this.authenticatedHeaders = new HttpHeaders( {
        'Authorization': `Bearer ${this.auth.token}`,
        'Content-Type': 'application/json'
      });
    } else {
      this.resetAuthentication();
      this.authenticatedHeaders = new HttpHeaders({ 'Content-Type': 'application/json' }) ;
    }
  }

  get authHeaders(): HttpHeaders {
    return this.authenticatedHeaders;
  }

  private resetAuthentication = (): Auth => this.auth = {} as Auth;

  postLogin(
    term: Login
  ): Observable<Auth> {
    return this.httpClient.post<Auth>(API_POST_LOGIN, term)
      .map(auth => {
        this.auth = auth;
        sessionStorage.setItem('Auth', JSON.stringify(this.auth));
        return this.auth;
      });
    }


    doLogout(queryParams: { next: string } = { next: '/dashboard' }): void {

          sessionStorage.clear();
          this.router.navigate(['/login'], {
            queryParams: { ...queryParams, next: queryParams.next.split('?')[0] }
          });
    }

    // Check authentication
    isAuthenticated(): boolean {
      if (sessionStorage.getItem('Auth')) {
      return true;
      }
      return false;
    }
}
