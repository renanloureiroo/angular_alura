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

  signUp(newUser: INewUser): Observable<any> {
    return this.httpClient.post(`http://localhost:3000/user/signup`, newUser);
  }
  verifyUserNameExists(userName: string): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/user/exists/${userName}`);
  }
}
