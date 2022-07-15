import { TransferService } from './../services/transfer.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  value: number;
  destiny: string;

  constructor(private service: TransferService) {}

  transfer(): void {
    this.service
      .add({
        value: this.value,
        destiny: this.destiny,
        date: new Date(),
      })
      .subscribe(
        (resultado) => {
          console.log(resultado);
          this.clearFields();
        },
        (err) => {
          console.error(err);
        }
      );
  }

  clearFields() {
    this.value = 0;
    this.destiny = '';
  }
}
