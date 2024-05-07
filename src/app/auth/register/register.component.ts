import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { GENDERS, HOBBIES, ROLES } from 'src/app/constants/constants';
import { Registration } from 'src/app/interfaces/registration.interface';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registrationForm !: FormGroup
  public genders: string[] = GENDERS
  public hobbies: string[] = HOBBIES
  public role: string[] = ROLES
  public adminList: string[] = []

  constructor(private registerService: RegisterService) {
  }

  public ngOnInit(): void {
    this.initializeForm();
  }

  public initializeForm(): void {
    this.registrationForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      // email validator for registration if email is already register or not
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")]),
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,12}$')]),
      confirmPassword: new FormControl('', [Validators.required, this.confirmPasswordValidator.bind(this)]),
      gender: new FormControl('', [Validators.required]),
      hobbies: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
    });
  }

  public onSubmit() {
    debugger
    this.registerService.setRegistrationData(this.registrationForm.value);
    this.registrationForm.reset();
  }

  public onRoleChange(): void {
    const selectedRole: string = this.registrationForm.get('role')?.value
    if (selectedRole === 'User') {
      this.registrationForm.addControl('adminList', new FormControl('', [Validators.required]));
      this.adminList = this.registerService.getAdminList();
    } else {
      this.registrationForm.removeControl('adminList');
    }
  }

  private confirmPasswordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const confirmPassword: string = control.value;
    const password: string = this.registrationForm?.get('password')?.value
    this.registrationForm?.get('password')?.valueChanges.pipe(take(1)).subscribe((newValue) => {
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
