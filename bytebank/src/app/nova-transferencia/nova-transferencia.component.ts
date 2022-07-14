import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() onTransfer = new EventEmitter<any>();

  value: number;
  destiny: number;

  constructor() {}

  transfer(): void {
    console.log('Solicitada nova transferência.');
    this.onTransfer.emit({
      value: this.value,
      destiny: this.destiny,
      date: new Date(),
    });

    this.clearFields();
  }

  clearFields() {
    this.value = 0;
    this.destiny = 0;
  }
}
