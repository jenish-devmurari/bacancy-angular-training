import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Registration } from 'src/app/interface/registration.interface';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registrationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.initializeForm()
  }

  public initializeForm(): void {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]],
      dateOfBirth: ['', Validators.required],
      totalMatchesPlayed: [0],
      height: [0],
      weight: [0]
    });
  }

  public onSubmit(): void {
    this.userService.registerUser(this.registrationForm.value).subscribe(
      (res) => {
        this.toastr.success(res);
      },
      (error) => {
        if (error instanceof HttpErrorResponse && error.status === 404) {
          this.toastr.error('Registration endpoint not found.', 'Error');
        } else {
          this.toastr.error('An error occurred during registration.', 'Error');
        }
      }
    );
    this.registrationForm.reset();
  }
}
