import { Component, Input, OnInit } from '@angular/core';

interface ITransferData {
  value: number;
  destiny: number;
  date: string;
}

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  @Input() transfers: ITransferData[];

  constructor() {}

  ngOnInit(): void {}
}
