import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Branch } from 'app/shared/models/branch.model';
import { environment } from 'environments/environment';
import {  Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  private apiURL = environment.stockmanagerUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  

 

  constructor(private httpClient: HttpClient) { }


  getBranches(): Observable<any> {
    return this.httpClient
    .get<Branch>(this.apiURL + '/api/Branches/search')
    .pipe(retry(1), catchError(this.errorHandler));
}





createBranch(branchData: any): Observable<Branch> {
  return this.httpClient.post<Branch>(this.apiURL + '/api/Branches', JSON.stringify(branchData), this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  )
}


getBranch(branchId: string): Observable<Branch> {
  return this.httpClient.get<Branch>(this.apiURL + '/api/Branches/' + branchId)
  .pipe(
    catchError(this.errorHandler)
  )
}

updateBranch(branchData: any, branchid: string): Observable<Branch> {
 
  return this.httpClient.put<Branch>(this.apiURL + '/api/Branches/' + branchid, JSON.stringify(branchData), this.httpOptions)
  
  .pipe(
    catchError(this.errorHandler)
  )
}

deleteBranch(branchId: string): Observable<any> {
  return this.httpClient.delete<Branch>(this.apiURL + '/api/Branches/' + branchId, this.httpOptions)
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
