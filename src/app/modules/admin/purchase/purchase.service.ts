import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Purchase } from 'app/shared/models/purchase.model';
import { environment } from 'environments/environment';
import {  Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  private apiURL = environment.stockmanagerUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  

 

  constructor(private httpClient: HttpClient) { }


  getPurchases(): Observable<any> {
    return this.httpClient
    .get<Purchase>(this.apiURL + '/api/Purchases/search')
    .pipe(retry(1), catchError(this.errorHandler));
}





createPurchase(productData: any): Observable<Purchase> {
  return this.httpClient.post<Purchase>(this.apiURL + '/api/Purchases', JSON.stringify(productData), this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  )
}


getPurchase(productId: string): Observable<Purchase> {
  return this.httpClient.get<Purchase>(this.apiURL + '/api/Purchases/' + productId)
  .pipe(
    catchError(this.errorHandler)
  )
}

updatePurchase(productData: any, productid: string): Observable<Purchase> {
 
  return this.httpClient.put<Purchase>(this.apiURL + '/api/Purchases/' + productid, JSON.stringify(productData), this.httpOptions)
  
  .pipe(
    catchError(this.errorHandler)
  )
}

deletePurchase(productId: string): Observable<any> {
  return this.httpClient.delete<Purchase>(this.apiURL + '/api/Purchases/' + productId, this.httpOptions)
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
