import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registrationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private toastr: ToastrService, private route: Router) { }

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
      dateOfBirth: ['', [Validators.required, this.notFutureDateValidator.bind(this)]],
      totalMatchesPlayed: [null],
      height: [null],
      weight: [null]
    });
  }

  public notFutureDateValidator(control: FormControl): { [key: string]: boolean } | null {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();
    if (selectedDate > currentDate) {
      return { futureDate: true };
    }
    return null;
  };

  public onSubmit(): void {
    this.userService.registerUser(this.registrationForm.value).pipe(take(1)).subscribe(
      (res) => {
        if (res === "Email is Already  Register") {
          this.toastr.error(res);
        } else {
          if (res === "User registered successfully") {
            this.toastr.success(res);
            this.route.navigate(['/login']);
          }
        }
      },
      (error) => {
        if (error.status === 0) {
          this.toastr.error('Something went wrong please try later', 'Error');
        } else if (error.status === 500) {
          this.toastr.error('An unexpected error occurred. Please try again later.', 'Error');
        } else {
          this.toastr.error('An error occurred. Please try again later.', 'Error');
        }
      }
    );
    this.registrationForm.reset();
  }
}
