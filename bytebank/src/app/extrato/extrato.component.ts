import { Transfer } from './../models/transfer.model';
import { TransferService } from './../services/transfer.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  transfers: Transfer[] = [];

  constructor(private service: TransferService) {}

  ngOnInit(): void {
    this.service.all().subscribe((transfer: Transfer[]) => {
      console.log(transfer);
      this.transfers = transfer;
    });
  }
}
