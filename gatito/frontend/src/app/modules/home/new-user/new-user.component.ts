import { Router } from '@angular/router';
import { UserExistsService } from './user-exists.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isLowerCase } from './isLowerCase';

import { INewUser } from './new-user';
import { NewUserService } from './new-user.service';
import { isEqualUserNameAndPassword } from './isEqualUserNameAndPassword';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  newUserForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private newUserService: NewUserService,
    private userExistsService: UserExistsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        fullName: ['', [Validators.required, Validators.minLength(4)]],
        userName: [
          '',
          [isLowerCase],
          [this.userExistsService.userAlreadyExists()],
        ],
        password: [''],
      },
      { validators: [isEqualUserNameAndPassword] }
    );
  }

  register() {
    if (this.newUserForm.valid) {
      const newUser = this.newUserForm.getRawValue() as INewUser;
      this.newUserService.signUp(newUser).subscribe(
        () => {
          this.router.navigateByUrl('');
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      console.log('não valido');
    }
  }
}
