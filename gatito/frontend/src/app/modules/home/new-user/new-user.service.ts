import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { INewUser } from './new-user';

@Injectable({
  providedIn: 'root',
})
export class NewUserService {
  url: string = 'http://localhost:3000/user';
  constructor(private httpClient: HttpClient) {}

  signUp({ email, fullName, password, userName }: INewUser): Observable<any> {
    return this.httpClient.post(`${this.url}/signup`, {
      email,
      fullName,
      userName,
      password,
    });
  }
  userNameExists(userName: string): Observable<any> {
    return this.httpClient.get(`${this.url}/exists/${userName}`);
  }
}
