import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ProductCategoryResponse, ProductCategory } from '../_models/product-category';
import { AuthService } from '../../auth/_service/auth.service';
import { API_GET_ALLPRODCATEGORY, API_PRODOUCT_CATEGORY } from '../../_const/api.const';

@Injectable()
export class ProductCategoryService {

  headers = this._authService.authHeaders;

  constructor(
    private http: HttpClient,
    private _authService: AuthService
  ) { }

  getProductCategories(): Observable<ProductCategoryResponse> {
    return this.http.get(`${API_GET_ALLPRODCATEGORY}`, { headers: this.headers })
      .map(this.extractData)
      .catch(this.handleError);
  }

  createProductCategory(productCategory: ProductCategory): Observable<ProductCategoryResponse> {
    return this.http.post(`${API_PRODOUCT_CATEGORY}`, productCategory, { headers: this.headers })
      .map(this.extractData)
      .catch(this.handleError);
  }

  getProductCategoryById(_id: string): Observable<ProductCategoryResponse> {
    return this.http.get(`${API_PRODOUCT_CATEGORY}/` + _id, { headers: this.headers })
      .map(this.extractData)
      .catch(this.handleError);
  }

  updateProductCategory(prodCategory: ProductCategory): Observable<ProductCategoryResponse> {
    return this.http.patch(`${API_PRODOUCT_CATEGORY}`, prodCategory, { headers: this.headers })
      .map(this.extractData)
      .catch(this.handleError);
  }

  deleteProductCategoryById(_id: string): Observable<ProductCategoryResponse> {
    return this.http.delete(`${API_PRODOUCT_CATEGORY}/` + _id, { headers: this.headers })
      .map(success => success)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = res;
    return body;
  }

  private handleError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }

}
