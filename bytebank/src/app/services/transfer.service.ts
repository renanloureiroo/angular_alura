import { Transfer } from './../models/transfer.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ITransferData {
  value: number;
  destiny: string;
  date: string;
}

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  private listTransfers: Transfer[] = [];
  private url = ' http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {}

  get transfers(): Transfer[] {
    return this.listTransfers;
  }

  all(): Observable<Transfer[]> {
    return this.httpClient.get<Transfer[]>(this.url);
  }

  add(transfer: Transfer): Observable<Transfer> {
    return this.httpClient.post<Transfer>(this.url, transfer);
  }
}
