import { AuthenticateService } from './../../../authenticate/authenticate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private authenticateService: AuthenticateService) {}

  ngOnInit(): void {}

  login() {
    this.authenticateService.signIn(this.username, this.password).subscribe(
      (response) => {
        console.log(response);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
