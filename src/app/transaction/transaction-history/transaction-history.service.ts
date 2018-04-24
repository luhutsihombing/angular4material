import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { API_DOMAIN } from '../../_const/api.const';
@Injectable()
export class TransactionHistoryService {
  private auth;
  constructor(private http: Http) { 
    this.auth = JSON.parse(sessionStorage.getItem('Auth'));    
  }
  historyMODEL: any[];
  valRes;
  productRES;catRES;
  getTransaction()
  {
    let url   = `${API_DOMAIN}`+"/api/transactionHistory/getAll";
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
