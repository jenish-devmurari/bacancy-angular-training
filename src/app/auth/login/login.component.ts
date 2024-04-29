import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private toastr: ToastrService, private route: Router) { }

  ngOnInit(): void {
    this.initializeForm()
  }


  public initializeForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,16}$')]],
    });
  }

  public onSubmit(): void {
    this.userService.loginUser(this.loginForm.value).subscribe((res) => {
      this.toastr.success('Login successful', 'Success', {
      });
      this.route.navigate(['/dashboard'])
    },
      (error) => {
        if (error.status === 401) {
          this.toastr.error(error.error.message, 'Error');
        } else if (error.status === 400) {
          this.toastr.error('Invalid input data. Please check your input and try again.', 'Error');
        } else if (error.status === 500) {
          this.toastr.error('An unexpected error occurred. Please try again later.', 'Error');
        } else {
          this.toastr.error('An error occurred. Please try again later.', 'Error');
        }
      }
    );
    this.loginForm.reset();
  }


}
