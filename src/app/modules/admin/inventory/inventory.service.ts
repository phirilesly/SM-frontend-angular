import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inventory } from 'app/shared/models/Inventory.model';
import { environment } from 'environments/environment';
import {  Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private apiURL = environment.stockmanagerUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  

 

  constructor(private httpClient: HttpClient) { }


  getInventories(): Observable<any> {
    return this.httpClient
    .get<Inventory>(this.apiURL + '/api/Inventories/search')
    .pipe(retry(1), catchError(this.errorHandler));
}





createInventory(inventoryData: any): Observable<Inventory> {
  return this.httpClient.post<Inventory>(this.apiURL + '/api/Inventories', JSON.stringify(inventoryData), this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  )
}


getInventory(inventoryId: string): Observable<Inventory> {
  return this.httpClient.get<Inventory>(this.apiURL + '/api/Inventories/' + inventoryId)
  .pipe(
    catchError(this.errorHandler)
  )
}

updateInventory(inventoryData: any, inventoryId: string): Observable<Inventory> {
 
  return this.httpClient.put<Inventory>(this.apiURL + '/api/Inventories/' + inventoryId, JSON.stringify(inventoryData), this.httpOptions)
  
  .pipe(
    catchError(this.errorHandler)
  )
}

deleteInventory(inventoryId: string): Observable<any> {
  return this.httpClient.delete<Inventory>(this.apiURL + '/api/Inventories/' + inventoryId, this.httpOptions)
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
