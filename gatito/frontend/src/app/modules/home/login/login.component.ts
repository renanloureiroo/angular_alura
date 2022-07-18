import { AuthenticateService } from '../../authenticate/authenticate.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(
    private authenticateService: AuthenticateService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {}

  login() {
    this.authenticateService.signIn(this.username, this.password).subscribe(
      (response) => {
        console.log(response);
        this.router.navigateByUrl('animals');
        this.location.replaceState('/animals');

        this.router.navigate(['animals']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
