import { API_PRODUCT_HISTORY_GETALL } from './../../_const/api.const'; 
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductHistorySearchService
 {
   private auth;
  constructor(private http: Http) { 
    this.auth = JSON.parse(sessionStorage.getItem('Auth'));
    console.log("Token this:"+this.auth.token);
  }
  productHistorySearchMODEL: any[];
  valRes;
  productHistoryRES;
  catRES;

  getProductHistory()
  {
    let url   = API_PRODUCT_HISTORY_GETALL;
    let headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, Authorization, X-Requested-With, Content-Type, Accept',
      'Authorization': 'Bearer '+this.auth.token
    }  
    let requestOptions = {                                                                                                                                                                                 
      headers: new Headers(headerDict), 
    };  
    return this.http.get(url,  requestOptions)
    .map(response => response.json())
  }
  
}
