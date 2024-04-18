import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent {

  @ViewChild('formData') registrationForm !: NgForm;

  submitForm(formValue: NgForm) {
    console.log(this.registrationForm.form);
  }

}
