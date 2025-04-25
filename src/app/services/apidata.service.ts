import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApidataService {

  constructor(private _HttpClient:HttpClient) { }

  baseUrl:string = "https://ecommerce.routemisr.com";

  getProducts():Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}/api/v1/products`);
  }

  GetSpecificProduct(id:any):Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}/api/v1/products/${id}`);
  }

  getCategories():Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}/api/v1/categories`);
  }

  getSpecificCategories(id:any):Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}/api/v1/categories/${id}`);
  }


}
