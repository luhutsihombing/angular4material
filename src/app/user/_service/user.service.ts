import {
   API_GET_AUTHORITY,
   API_GET_USER,
   API_DELETE_USER,
   API_PATCH_USER,
   API_POST_USER_SAVE,
   API_GET_ALLUSER } from './../../_const/api.const';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './../../auth/_service/auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  UserSaveTerm,
  UserSearchList,
  User,
  UserDetail,
  Autority
} from './../_model/user.model';
import 'rxjs/add/operator/retry';

@Injectable()
export class UserService {
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) { }


  getAuthorities(): Observable<Autority> {
    return this.httpClient
    .get(`${API_GET_AUTHORITY}`, { headers: this.authService.authHeaders })
    .map((value: Autority) => value as Autority )
    .catch(this.handleError);
  }

  getUserDetails(id: number): Observable<UserDetail> {
    return this.httpClient
    .get(`${API_GET_USER}/${id}`, { headers: this.authService.authHeaders })
    .map((value: UserDetail) => value as UserDetail )
    .catch(this.handleError);
  }

  deleteUser(entityId: string): Observable<any> {
    return this.httpClient.delete(`${API_DELETE_USER}/${entityId}`, { headers: this.authService.authHeaders })
    .map(success => success)
    .catch(this.handleError);
  }

  postUserUpdate(user: UserSaveTerm): Observable<any> {

    return this.httpClient.patch<any>(API_PATCH_USER, user,  {headers: this.authService.authHeaders})
    .map(success => success)
    .catch(this.handleError);
  }

  postUserSave(user: UserSaveTerm): Observable<any> {

    return this.httpClient.post<any>(API_POST_USER_SAVE, user,  {headers: this.authService.authHeaders});
 }


  getSearchList(): Observable<UserSearchList> {
    return this.httpClient
    .get(`${API_GET_ALLUSER}`, { headers: this.authService.authHeaders })
    .map(
      (value: UserSearchList) => value as UserSearchList )
      .catch(this.handleError);
   }


private extractData(res: Response) {
 const body = res;
 return body;
}

private handleError(error: Response | any) {
 return Observable.throw(error.status);
}

}
