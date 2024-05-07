import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription, take } from 'rxjs';
import { GENDERS, HOBBIES } from 'src/app/constants/constants';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  public addUserForm!: FormGroup
  public genders: string[] = GENDERS
  public hobbies: string[] = HOBBIES

  public ngOnInit(): void {
    this.initializeForm();
  }

  public initializeForm(): void {
    this.addUserForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")]),
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,12}$')]),
      confirmPassword: new FormControl('', [Validators.required, this.confirmPasswordValidator.bind(this)]),
      gender: new FormControl('', [Validators.required]),
      hobbies: new FormControl('', [Validators.required]),
      role: new FormControl('User'),
      admin: new FormControl('admin@123')
    });
  }

  public onSubmit() {
    console.log(this.addUserForm.value);
  }

  public confirmPasswordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const confirmPassword: string = control.value;
    const password: string = this.addUserForm?.get('password')?.value
    const passwordSubscription = this.addUserForm?.get('password')?.valueChanges.pipe(take(1)).subscribe((newValue) => {
      if (newValue !== confirmPassword) {
        control.setErrors({ passwordMatch: true });
      } else {
        control.setErrors(null);
      }
    });
    if (confirmPassword !== password) {
      return { passwordMatch: true }
    }
    return null
  }


}
