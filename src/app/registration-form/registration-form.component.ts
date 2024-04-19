import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { userData } from '../interface/userData';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent {

  @ViewChild('formData') registrationForm !: NgForm;

  public cities = ['Ahmadabad', 'Surat', 'Rajkot', 'Vadodara'];
  public Gender = ['Male', 'Female', 'Other'];

  public userData: userData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    gender: "",
    city: "",
    remember: false
  }

  public submitForm(formValue: NgForm): void {
    // for seeing data in console
    console.log(this.registrationForm.form)
  }

  public resetForm(): void {
    this.registrationForm.reset();
  }

  public setValue(): void {
    this.registrationForm.form.setValue({
      firstName: "Jenish",
      lastName: "Devmurari",
      email: "jenishdev07@gmail.com",
      phone: "1234567890",
      password: "Jenish@08",
      gender: "Male",
      city: "Surat",
      rememberMe: true
    })
  }

  public patchValue(): void {
    this.registrationForm.form.patchValue({
      gender: "Male",
      city: "Surat",
    });
  }
}
