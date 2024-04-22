import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CompanyFormData } from '../interface/company-data-interface';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {

  public companyForm !: FormGroup;
  public isSubmitted: boolean = false;
  public formData !: CompanyFormData;

  ngOnInit(): void {
    this.initializeForm();
  }

  public onSubmit(): void {
    this.isSubmitted = true;
    this.formData = this.companyForm.value;

    this.companyForm.reset();
  }

  public initializeForm(): void {
    this.companyForm = new FormGroup({
      name: new FormControl('Bacancy Technology LLP', [Validators.required]),
      email: new FormControl('bacancy@bacancy.com', [Validators.required, Validators.email]),
      website: new FormControl('www.bacancy.com', [Validators.required, this.websiteValidator]),
      phone: new FormControl('+91-1234567890', [Validators.required, this.phoneValidator]),
      projects: new FormArray([])
    });
  }

  public addProject(): void {
    const projectFormGroup = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [this.projectNameValidator.bind(this)],
      }),
      description: new FormControl(null, [Validators.required]),
      startDate: new FormControl(null, [Validators.required]),
      endDate: new FormControl(null, [Validators.required])
    });
    (<FormArray>this.companyForm.get('projects')).push(projectFormGroup);
  }

  public removeProject(index: number): void {
    (<FormArray>this.companyForm.get('projects')).removeAt(index);
  }

  public getProjectControl(): AbstractControl[] {
    return (<FormArray>this.companyForm.get('projects')).controls;
  }

  private phoneValidator(control: FormControl): ValidationErrors | null {
    const validPhoneNumberRegex: RegExp = /^\+91-\d{10}$/;
    const phoneNumber: string = control.value;
    if (!phoneNumber || validPhoneNumberRegex.test(phoneNumber)) {
      return null;
    } else {
      return { invalidPhoneNumberFormat: true };
    }
  }

  private websiteValidator(control: FormControl): ValidationErrors | null {
    const validWebsiteRegex: RegExp = /^www\.[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
    const websiteValue: string = control.value;

    if (!websiteValue || validWebsiteRegex.test(websiteValue)) {
      return null;
    } else {
      return { invalidWebsiteFormat: true };
    }
  }

  public projectNameValidator(control: AbstractControl): Observable<ValidationErrors | null> {
    const projectName = control.value;
    const projects = this.companyForm.get('projects')?.value;
    const isProjectNameExist = projects.some((project: any) => project.name === projectName);

    return new Observable<ValidationErrors | null>(observer => {
      setTimeout(() => {
        if (isProjectNameExist) {
          observer.next({ projectNameExist: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });
  }

}




