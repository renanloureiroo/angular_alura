import { AnimalsService } from './../animals.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Animal } from '../animals';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-animal',
  templateUrl: './details-animal.component.html',
  styleUrls: ['./details-animal.component.css'],
})
export class DetailsAnimalComponent implements OnInit {
  id!: number;
  animal$!: Observable<Animal>;

  constructor(
    private animalsService: AnimalsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.animal$ = this.animalsService.getById(Number(this.id));
  }
}
