import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _httpClient: HttpClient ) { }

  getAllUsers(data:number): Observable<any> {
    return this._httpClient.get(`https://reqres.in/api/users?page=${data}`);
  }
 
  getUserById(id:number): Observable<any> {
    return this._httpClient.get(`https://reqres.in/api/users/${id}`);
  }
}
