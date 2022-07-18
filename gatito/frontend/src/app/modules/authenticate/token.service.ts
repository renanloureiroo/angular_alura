import { Injectable } from '@angular/core';

const KEY = 'gatitoAccessToken';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  getAccessToken() {
    return localStorage.getItem(KEY) ?? '';
  }

  saveAccessToken(accessToken: string) {
    localStorage.setItem(KEY, accessToken);
  }

  deleteAccessToken() {
    localStorage.removeItem(KEY);
  }

  accessTokenExists() {
    return !!this.getAccessToken();
  }
}
