import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  public validationNgClass(control: AbstractControl | null): { [key: string]: boolean | undefined } {
    return {
      'error': control?.invalid && (control?.dirty || control?.touched),
      'success': control?.valid
    };
  }

  public isFormFieldInvalid(control: AbstractControl | null): boolean {
    return control?.errors?.['required'] && (control?.dirty || control?.touched);
  }

  public isEmailPatternMatch(control: AbstractControl | null): boolean {
    return control?.errors?.['pattern'] && (control?.dirty || control?.touched);
  }

  public confirmPasswordValidatorForForm(form: FormGroup, control: AbstractControl): { [key: string]: boolean } | null {
    const confirmPassword: string = control.value;
    const password: string = form?.get('password')?.value;
    form?.get('password')?.valueChanges.subscribe((newValue) => {
      if (newValue !== confirmPassword) {
        control.setErrors({ passwordMatch: true });
      } else {
        control.setErrors(null);
      }
    });
    if (confirmPassword !== password) {
      return { passwordMatch: true };
    }
    return null;
  }

}
