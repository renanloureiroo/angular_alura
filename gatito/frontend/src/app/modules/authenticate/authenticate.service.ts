import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  private url: string = 'http://localhost:3000/user/login';
  constructor(private httpClient: HttpClient) {}

  signIn(username: string, password: string): Observable<any> {
    return this.httpClient.post(this.url, {
      userName: username,
      password,
    });
  }
}
