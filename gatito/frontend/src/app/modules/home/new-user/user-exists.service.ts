import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs';

import { NewUserService } from './new-user.service';

@Injectable({
  providedIn: 'root',
})
export class UserExistsService {
  constructor(private newUserService: NewUserService) {}

  userAlreadyExists() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((userName) =>
          this.newUserService.verifyUserNameExists(userName)
        ),
        map((exists) => (exists ? { userExists: true } : null)),
        first()
      );
    };
  }
}
