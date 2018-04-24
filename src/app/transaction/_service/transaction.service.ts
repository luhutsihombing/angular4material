import { API_GET_AUTHORITY, API_GET_ALLTRANSACTION, API_PRODUCT, API_TRANSACTION } from './../../_const/api.const';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './../../auth/_service/auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  Transaction, TransactionDetail, UpdateTerm, Dummy
} from './../_model/transaction.model';
import 'rxjs/add/operator/retry';

@Injectable()
export class TransactionService {

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {

   }

  getTransactionList(): Observable<any> {
    return this.httpClient
    .get(`${API_GET_ALLTRANSACTION}`, { headers: this.authService.authHeaders })
    .map(
      (value: any) => value as any );
   }

   getProduct(): Observable<any> {
    return this.httpClient
    .get(`${API_PRODUCT}`, { headers: this.authService.authHeaders })
    .map(
      (value: any) => value as any );
   }

   postTrxSave(trxSave: any): Observable<any> {

    return this.httpClient.post<any>(API_TRANSACTION, trxSave,  {headers: this.authService.authHeaders});
  }

  getTransactionDetails(id: number): Observable<Dummy> {
    return this.httpClient
    .get(`${API_TRANSACTION}/${id}`, { headers: this.authService.authHeaders })
    .map((value: Dummy) => value as Dummy );

  }

  putTransactionUpdate(updateTerm: UpdateTerm): Observable<any> {

    return this.httpClient.put<any>(API_TRANSACTION, updateTerm,  {headers: this.authService.authHeaders});
  }


  deleteTransaction(entityId: string): Observable<any> {
    return this.httpClient.delete(`${API_TRANSACTION}/${entityId}`, { headers: this.authService.authHeaders });
  }

}
