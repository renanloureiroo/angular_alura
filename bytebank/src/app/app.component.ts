import { Component } from '@angular/core';

interface ITransferData {
  value: number;
  destiny: number;
  date: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';

  transfers: ITransferData[] = [];

  transfer($event) {
    console.log($event);

    this.transfers.push($event);
  }
}
