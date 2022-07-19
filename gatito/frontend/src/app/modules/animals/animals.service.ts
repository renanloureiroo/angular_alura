import { environment } from './../../../environments/environment';
import { TokenService } from './../authenticate/token.service';
import { Animal, Animals } from './animals';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {}

  listByUser(userName: string): Observable<Animals> {
    const token = this.tokenService.getAccessToken();
    const headers = new HttpHeaders().append('x-access-token', token);
    return this.httpClient.get<Animals>(`${API}/${userName}/photos`, {
      headers,
    });
  }

  getById(id: number): Observable<Animal> {
    const token = this.tokenService.getAccessToken();
    const headers = new HttpHeaders().append('x-access-token', token);

    return this.httpClient.get<Animal>(`${API}/photos/${id}`, {
      headers,
    });
  }
}
