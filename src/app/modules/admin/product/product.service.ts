import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'app/shared/models/product.model';
import { environment } from 'environments/environment';
import {  Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


const baseUrl = environment.stockmanagerUrl;



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiURL = environment.stockmanagerUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  

 

  constructor(private httpClient: HttpClient) { }


  getProducts(): Observable<any> {
    return this.httpClient
    .get<Product>(this.apiURL + '/api/Products/search')
    .pipe(retry(1), catchError(this.errorHandler));
}





createProduct(productData: any): Observable<Product> {
  return this.httpClient.post<Product>(this.apiURL + '/api/Products', JSON.stringify(productData), this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  )
}


getProduct(productId: string): Observable<Product> {
  return this.httpClient.get<Product>(this.apiURL + '/api/Products/' + productId)
  .pipe(
    catchError(this.errorHandler)
  )
}

updateProduct(productData: any, productid: string): Observable<Product> {
 
  return this.httpClient.put<Product>(this.apiURL + '/api/Products/' + productid, JSON.stringify(productData), this.httpOptions)
  
  .pipe(
    catchError(this.errorHandler)
  )
}

deleteProduct(productId: string): Observable<any> {
  return this.httpClient.delete<Product>(this.apiURL + '/api/Products/' + productId, this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  )
}



   
 
errorHandler(error) {
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
    errorMessage = error.error.message;
  } else {
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  return throwError(errorMessage);
}
}
