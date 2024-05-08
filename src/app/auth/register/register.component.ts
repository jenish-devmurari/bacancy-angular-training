import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { GENDERS, HOBBIES, ROLES } from 'src/app/constants/constants';
import { Admin } from 'src/app/interfaces/admin.interface';
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

  constructor(private registerService: RegisterService, private router: Router, private toaster: ToastrService) {
  }

  public ngOnInit(): void {
    this.initializeForm();
    this.seedAdminData();
  }

  public initializeForm(): void {
    this.registrationForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")]),
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,12}$')]),
      confirmPassword: new FormControl('', [Validators.required, this.confirmPasswordValidator.bind(this)]),
      gender: new FormControl('', [Validators.required]),
      hobbies: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
    });
  }

  public onSubmit() {
    if (this.registerService.setRegistrationData(this.registrationForm.value)) {
      this.toaster.success("Successfully register")
      this.router.navigate(['/login']);
      this.registrationForm.reset();
    }

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

  private seedAdminData(): void {
    const localStorageData = localStorage.getItem('Users');
    if (!localStorageData || localStorageData.trim() === '') {
      const admin: Admin = {
        firstName: 'Admin',
        lastName: 'Admin',
        email: 'admin@gmail.com',
        password: 'Admin@123',
        confirmPassword: 'Admin@123',
        gender: 'Male',
        hobbies: 'Coding',
        role: 'Admin',
        isActive: true,
        users: [],
      };
      localStorage.setItem('Users', JSON.stringify([admin]));
    }
  }

  private confirmPasswordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const confirmPassword: string = control.value;
    const password: string = this.registrationForm?.get('password')?.value
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
