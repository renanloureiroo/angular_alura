import { Observable, switchMap } from 'rxjs';
import { AnimalsService } from './../animals.service';
import { UserService } from './../../authenticate/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Animals } from '../animals';

@Component({
  selector: 'app-list-animals',
  templateUrl: './list-animals.component.html',
  styleUrls: ['./list-animals.component.css'],
})
export class ListAnimalsComponent implements OnInit {
  animals$!: Observable<Animals>;

  constructor(
    private userService: UserService,
    private animalsService: AnimalsService
  ) {}

  ngOnInit(): void {
    this.animals$ = this.userService.getUser().pipe(
      switchMap((user) => {
        const userName = user.name ?? '';

        return this.animalsService.listByUser(userName);
      })
    );
  }
}
