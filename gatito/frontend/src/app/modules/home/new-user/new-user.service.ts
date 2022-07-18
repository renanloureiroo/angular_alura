import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = environment.apiURL;
import { INewUser } from './new-user';

@Injectable({
  providedIn: 'root',
})
export class NewUserService {
  constructor(private httpClient: HttpClient) {}

  signUp(newUser: INewUser): Observable<any> {
    return this.httpClient.post(`${API}/user/signup`, newUser);
  }
  verifyUserNameExists(userName: string): Observable<any> {
    return this.httpClient.get(`${API}/user/exists/${userName}`);
  }
}
