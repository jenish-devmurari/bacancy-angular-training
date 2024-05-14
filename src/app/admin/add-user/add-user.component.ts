import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GENDERS, HOBBIES } from 'src/app/constants/constants';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  public addUserForm!: FormGroup;
  public genders: string[] = GENDERS;
  public hobbies: string[] = HOBBIES;

  constructor(private registerService: RegisterService, private toaster: ToastrService, private localStorage: LocalStorageService) { }

  public ngOnInit(): void {
    this.initializeForm();
  }

  public onSubmit(): void {
    if (this.addUserForm.valid) {
      if (this.registerService.setRegistrationData(this.addUserForm.value)) {
        this.toaster.success("User Added Successfully");
        this.addUserForm.reset();
      }
    } else {
      this.toaster.error("Please fill out the form correctly.");
    }
  }

  private initializeForm(): void {
    this.addUserForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.pattern("^[a-z]{1}[a-z0-9.]+@[a-z0-9]+\.[a-z]{2,6}$"),]),
      password: new FormControl(null, [Validators.required, Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,12}$')]),
      confirmPassword: new FormControl(null, [Validators.required, this.confirmPasswordValidator.bind(this)]),
      gender: new FormControl(null, [Validators.required]),
      hobbies: new FormControl(null, [Validators.required]),
      role: new FormControl('User'),
      adminList: new FormControl(this.getAdminEmail())
    });
  }

  //get admin email who is loggedIn
  private getAdminEmail(): string {
    return this.localStorage.getLoggedUserEmail();
  }

  // confirm password validator
  private confirmPasswordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const confirmPassword: string = control.value;
    const password: string = this.addUserForm?.get('password')?.value;
    this.addUserForm?.get('password')?.valueChanges.subscribe((newValue) => {
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

