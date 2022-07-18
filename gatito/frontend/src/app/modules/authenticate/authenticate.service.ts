import { UserService } from './user/user.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  private url: string = 'http://localhost:3000/user/login';
  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) {}

  signIn(username: string, password: string): Observable<HttpResponse<any>> {
    return this.httpClient
      .post(
        this.url,
        {
          userName: username,
          password,
        },
        {
          observe: 'response',
        }
      )
      .pipe(
        tap((res) => {
          const accessToken = res.headers.get('x-access-token') ?? '';

          this.userService.saveAccessToken(accessToken);
        })
      );
  }
}
