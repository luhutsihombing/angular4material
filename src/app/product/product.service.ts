import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { API_DOMAIN } from '../_const/api.const';
@Injectable()
export class ProductService
 {
   private auth;
  constructor(private http: Http) { 
    this.auth = JSON.parse(sessionStorage.getItem('Auth'));
    console.log("Token this:"+this.auth.token);
  }
  productMODEL: any[];
  valRes;
  productRES;catRES;

  getProduct()
  {
    let url   = `${API_DOMAIN}`+"/api/product/getAll";
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
getCategory()
 {
  let url   = `${API_DOMAIN}`+"/api/productCategory/getAll";
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

addProduct(credentials)
 {
  let url   = `${API_DOMAIN}`+"/api/product";
  let body3  = {
    code: 'NEWANGULAR',
    description: 'New Angular desc Product',
    name: 'Product name',
    price: 90,
    productCategoryid: 1,
    shortDescription: 'short Desc',
    stock: 0
  }
  let body2 = JSON.stringify(credentials);
    var r = confirm("Are you sure save Data!");
    if (r == true) 
    {
      let headers = new Headers({ 'Content-Type': 'application/json',
                'Authorization': 'Bearer '+this.auth.token });
      let options = new RequestOptions({ headers: headers });   
      return this.http.post(url, body2, options)
      .map(response => response.json());
    }
 }

 updatedProduct(credentials)
 {
  let url   = `${API_DOMAIN}`+"/api/product";  
  let body2 = JSON.stringify(credentials);
  let headers = new Headers({ 'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.auth.token });
  var r = confirm("Are you sure update Data!");
  if (r == true)
  {
    let options = new RequestOptions({ headers: headers });   
    return this.http.put(url, body2, options)
    .map(response => response.json());
  }
 }

 getdetailProduct(xi)
 {
   let url   = `${API_DOMAIN}`+"/api/product/"+xi; 
      let headers= new Headers();
      headers.append('Authorization', 'Bearer '+this.auth.token);
      let options= new RequestOptions({headers:headers});
      return this.http.get(url,  options).map(response => response.json())
 }

  deleteProduct(xi)
 {
    var r = confirm("Are you sure delete product!");
    if (r == true) {
      let url   = `${API_DOMAIN}`+"/api/product/"+xi; 
      let headers= new Headers();
      headers.append('Authorization', 'Bearer '+this.auth.token);
      let options= new RequestOptions({headers:headers});
      return this.http.delete(url,  options).map(response => response.json())  
        
    }
 }

 updateUSER()
 {
  let url   = `${API_DOMAIN}`+"/api/user";
  let body3  = {
    authorityId: 1,
    email: 'admin@admin.com',
    firstName: 'first name',
    id: 65,
    lastName: "Last Name",
    password: 'admin',
    userName: 'admin'
  }
  let body2 = JSON.stringify(body3);
    var r = confirm("Are you sure save Data!");
    if (r == true) 
    {
      let headers = new Headers({ 'Content-Type': 'application/json',
                'Authorization': 'Bearer '+this.auth.token });
      let options = new RequestOptions({ headers: headers });   
      return this.http.patch(url, body3, options)
      .map(response => response.json());
    }
 }

 
}
