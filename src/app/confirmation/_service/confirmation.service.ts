import { Confirmation } from './../_model/confirmation';
import { AuthService } from './../../auth/_service/auth.service';
import { API_PRODUCT_HISTORY_GETALL, API_CONFIRMATION } from './../../_const/api.const'; 
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ConfirmationService
 {
  headers = this._authService.authHeaders;

   private auth;
  constructor(
    private http: HttpClient,
    private _authService: AuthService

  ) { 
  }

  getConfirmation(_id: string): Observable<Confirmation> {
    return this.http.get(`${API_CONFIRMATION}/` + _id, { headers: this.headers })
      .map(this.extractData)
      .catch(this.handleError);
  }
  
  private extractData(res: Response) {
    console.log("res");
    console.log(res);
    let body = res;
    return body;
  }

  private handleError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }

  
}
