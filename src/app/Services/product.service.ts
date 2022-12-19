import { IProduct } from '../Models/iproduct';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = 'assets/Data/products.json';
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<IProduct[]>(this.baseUrl);
  }

}
