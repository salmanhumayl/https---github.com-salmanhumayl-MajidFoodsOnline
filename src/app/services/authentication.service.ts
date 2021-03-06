import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError, map} from 'rxjs/operators';


import { LoginUrl, RegisterUrl } from '../config/api';

import {Customer} from 'src/app/models/customer';
import { Login } from '../models/Login';
import { UserInfo } from '../models/UserInfo';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _http:HttpClient) { }

  private handleError(errorResponse:HttpErrorResponse){
    return throwError(errorResponse.message);

  }

  public isAuthenticated(): boolean {
    return this.getToken() !== null;

  }

  storeToken(token: string) {
    localStorage.setItem("token", token);
  }

  getToken() {

     return localStorage.getItem("token"); // if empty return null
  }
  removeToken() {
     localStorage.removeItem("token");
  }



  StoreUserInfo(role: any) {

    localStorage.setItem('role', JSON.stringify(role));
  }

  getRole() {

    return JSON.parse(localStorage.getItem('role'));
  }
  removeRole() {
     localStorage.removeItem("role");
  }

  Registration (oCustomer :Customer) :Observable<number> {
    return this._http.post<number>(RegisterUrl,oCustomer )
    .pipe(
      map(result=>{

        return result;
      }),

      catchError(this.handleError)
  )

  }

  Login (oUser :Login) :Observable<number> {
    return this._http.post<number>(LoginUrl,oUser)
    .pipe(
      map(result=>{

        return result;
      }),

     // catchError(this.handleError)
  )

  }

  GetUserInfo(ID:number) :Observable<UserInfo>{
    return this._http.get<UserInfo>(LoginUrl+"?iID=" + ID)
  //  .pipe(
    //  catchError(this.handleError)
  //);
  }

}
