import { ApplicationUser } from './../../../shared/models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import {  Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURL = environment.stockmanagerUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  

 

  constructor(private httpClient: HttpClient) { }


  getUsers(): Observable<any> {
    return this.httpClient
    .get<ApplicationUser>(this.apiURL + '/api/Auth/search')
    .pipe(retry(1), catchError(this.errorHandler));
}





createUser(userData: any): Observable<ApplicationUser> {
  return this.httpClient.post<ApplicationUser>(this.apiURL + '/api/Auth/register', JSON.stringify(userData), this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  )
}


getUser(userId: string): Observable<ApplicationUser> {
  return this.httpClient.get<ApplicationUser>(this.apiURL + '/api/Products/' + userId)
  .pipe(
    catchError(this.errorHandler)
  )
}

updateUser(userData: any, userid: string): Observable<ApplicationUser> {
 
  return this.httpClient.put<ApplicationUser>(this.apiURL + '/api/Products/' + userid, JSON.stringify(userData), this.httpOptions)
  
  .pipe(
    catchError(this.errorHandler)
  )
}

deleteUser(userId: string): Observable<any> {
  return this.httpClient.delete<ApplicationUser>(this.apiURL + '/api/Products/' + userId, this.httpOptions)
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
