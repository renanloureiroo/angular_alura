import { AbstractControl } from '@angular/forms';

export function isLowerCase(control: AbstractControl) {
  const value = control.value;
  if (value !== value.toLowerCase()) {
    return { lowerCase: true };
  } else {
    return null;
  }
}
