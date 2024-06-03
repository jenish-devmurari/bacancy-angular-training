import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GENDERS, HOBBIES, emailRegex, passwordRegex } from 'src/app/constants/constants';
import { Roles } from 'src/app/enums/roles.enum';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RegisterService } from 'src/app/services/register.service';
import { ValidationService } from 'src/app/services/validation.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  public addUserForm!: FormGroup;
  public genders: string[] = GENDERS;
  public hobbies: string[] = HOBBIES;

  constructor(private registerService: RegisterService, private toaster: ToastrService, private localStorage: LocalStorageService, private validation: ValidationService) { }

  public ngOnInit(): void {
    this.initializeForm();
  }

  public onSubmit(): void {
    if (this.addUserForm.valid) {
      this.registerUser();
    } else {
      this.toaster.error("Please fill out the form correctly.");
    }
  }

  private registerUser(): void {
    if (this.registerService.setRegistrationData(this.addUserForm.value)) {
      this.toaster.success("User Added Successfully");
      this.addUserForm.reset();
    } else {
      this.toaster.error("Failed to add user. Please try again.");
    }
  }

  private initializeForm(): void {
    this.addUserForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.pattern(emailRegex)]),
      password: new FormControl(null, [Validators.required, Validators.pattern(passwordRegex)]),
      confirmPassword: new FormControl(null, [Validators.required, this.confirmPasswordValidator.bind(this)]),
      gender: new FormControl(null, [Validators.required]),
      hobbies: new FormControl(null, [Validators.required]),
      role: new FormControl(Roles.User),
      adminList: new FormControl(this.getAdminEmail())
    });
  }

  //get admin email who is loggedIn
  private getAdminEmail(): string | undefined {
    return this.localStorage.getLoggedUserEmail();
  }

  // confirm password validator
  private confirmPasswordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    return this.validation.confirmPasswordValidatorForForm(this.addUserForm, control);
  }

  public validationClass(control: AbstractControl | null): { [key: string]: boolean | undefined } {
    return this.validation.validationNgClass(control);
  }

  public isFieldInvalid(control: AbstractControl | null): boolean {
    return this.validation.isFormFieldInvalid(control);
  }

  public emailPattern(control: AbstractControl | null): boolean {
    return this.validation.isEmailPatternMatch(control);
  }
}

