import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3000/';
  isLoadUserList$ = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  createUser(user): Observable<any> {
    return this.http.post(this.url + 'users', user);
  }

  getUsers(): Observable<any> {
    return this.http.get(this.url + 'users');
  }
}
