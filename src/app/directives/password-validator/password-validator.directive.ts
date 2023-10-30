import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPasswordValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordValidatorDirective,
      multi: true,
    }
  ],
  standalone: true
})
export class PasswordValidatorDirective implements Validator{
  @Input('appPasswordValidator') requiredPattern!: string;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value) {
      const pattern = new RegExp(this.requiredPattern);
      const isValid = pattern.test(control.value);
      console.log(isValid)
      if (!isValid) {
        return { passwordPattern: true };
      }
    }

    return null;
  }

}
