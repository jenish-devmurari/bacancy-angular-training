import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

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

}
