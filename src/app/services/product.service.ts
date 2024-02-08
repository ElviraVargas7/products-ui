import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = "http://localhost:4000/products/"
  
  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(this.url)
  }

  deleteProduct(id: String): Observable<any> {
    return this.http.delete(this.url + id)
  }

  createProduct(product: Product): Observable<any> {
    return this.http.post(this.url, product)
  }

  getProduct(id: String): Observable<any> {
    return this.http.get(this.url + id)
  }

  updateProduct(id: String, product: Product): Observable<any> {
    return this.http.put(this.url + id, product)
  }
}
