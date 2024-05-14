import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GENDERS, HOBBIES, ROLES, Roles } from 'src/app/constants/constants';
import { Admin } from 'src/app/interfaces/admin.interface';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RegisterService } from 'src/app/services/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registrationForm !: FormGroup;
  public genders: string[] = GENDERS;
  public hobbies: string[] = HOBBIES
  public role: string[] = ROLES;
  public adminList: string[] = [];

  constructor(private registerService: RegisterService, private router: Router, private toaster: ToastrService, private localStorage: LocalStorageService) { }

  public ngOnInit(): void {
    this.initializeForm();
    this.seedAdminData();
  }

  public onSubmit(): void {
    if (this.registrationForm.valid) {
      if (this.registerService.setRegistrationData(this.registrationForm.value)) {
        this.toaster.success("Successfully register");
        this.router.navigate(['/login']);
        this.registrationForm.reset();
      }
    } else {
      this.toaster.error("Please fill out the form correctly.");
    }
  }

  // on role change of user generate dynamic admin control
  public onRoleChange(): void {
    const selectedRole: string = this.registrationForm.get('role')?.value;
    if (selectedRole === Roles.User) {
      this.registrationForm.addControl('adminList', new FormControl(null, [Validators.required]));
      this.adminList = this.registerService.getAdminList();
    } else {
      this.registrationForm.removeControl('adminList');
    }
  }

  private initializeForm(): void {
    this.registrationForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.pattern("^[a-z]{1}[a-z0-9.]+@[a-z0-9]+\.[a-z]{2,6}$")]),
      password: new FormControl(null, [Validators.required, Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,12}$')]),
      confirmPassword: new FormControl(null, [Validators.required, this.confirmPasswordValidator.bind(this)]),
      gender: new FormControl(null, [Validators.required]),
      hobbies: new FormControl(null, [Validators.required]),
      role: new FormControl(null, [Validators.required]),
    });
  }

  // seed admin data when application run
  private seedAdminData(): void {
    const localStorageData = this.localStorage.getUserData();
    if (!localStorageData || localStorageData.trim() === '') {
      const admin: Admin = {
        firstName: 'Admin',
        lastName: 'Admin',
        email: 'admin@gmail.com',
        password: 'U2FsdGVkX18XG16YOh/NGSP3tUBYSKe2n0Kh+//PIR8=',
        confirmPassword: 'U2FsdGVkX18XG16YOh/NGSP3tUBYSKe2n0Kh+//PIR8=',
        gender: 'Male',
        hobbies: 'Coding',
        role: Roles.Admin,
        isActive: true,
        users: [],
      };
      this.localStorage.setLocalStorage([admin]);
    }
  }

  // confirm password validator
  private confirmPasswordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const confirmPassword: string = control.value;
    const password: string = this.registrationForm?.get('password')?.value;
    this.registrationForm?.get('password')?.valueChanges.subscribe((newValue) => {
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
