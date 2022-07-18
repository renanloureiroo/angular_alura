import { Component, Input, OnInit } from '@angular/core';
import { Animals } from '../animals';

@Component({
  selector: 'app-photos-grid-animals',
  templateUrl: './photos-grid-animals.component.html',
  styleUrls: ['./photos-grid-animals.component.css'],
})
export class PhotosGridAnimalsComponent implements OnInit {
  @Input() animals!: Animals;
  constructor() {}

  ngOnInit(): void {}
}
