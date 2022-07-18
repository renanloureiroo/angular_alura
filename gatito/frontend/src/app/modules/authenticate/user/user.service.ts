import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { User } from './user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<User>({});

  constructor(private tokenService: TokenService) {}

  private decodeJTW() {
    const token = this.tokenService.getAccessToken();
    const user = jwt_decode(token) as User;

    this.userSubject.next(user);
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  saveAccessToken(token: string) {
    this.tokenService.saveAccessToken(token);
    this.decodeJTW();
  }

  logout() {
    this.tokenService.deleteAccessToken();
    this.userSubject.next({});
  }

  isAuthenticated() {
    return this.tokenService.accessTokenExists();
  }
}
