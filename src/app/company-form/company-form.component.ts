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

  public companyForm!: FormGroup;
  public isSubmitted: boolean = false;
  public formData!: CompanyFormData;

  ngOnInit(): void {
    this.initializeForm();
  }

  public onSubmit(): void {
    this.isSubmitted = true;
    this.formData = this.companyForm.value;
    this.companyForm.reset();
    (this.companyForm.get('projects') as FormArray).clear();
  }

  public initializeForm(): void {
    this.companyForm = new FormGroup({
      name: new FormControl('Bacancy Technology LLP', [Validators.required]),
      email: new FormControl('bacancy@bacancy.com', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")]),
      website: new FormControl('www.bacancy.com', [Validators.required, this.websiteValidator]),
      phone: new FormControl('+916789012345', [Validators.required, this.phoneValidator]),
      projects: new FormArray([])
    });
  }

  public addProject(): void {
    const projectFormGroup = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required, this.whiteSpaceValidator],
        asyncValidators: [this.projectNameValidator.bind(this)],
      }),
      description: new FormControl(null, [Validators.required]),
      startDate: new FormControl(null, [Validators.required, this.startDateValidator]),
      endDate: new FormControl(null, [Validators.required, this.endDateValidator])
    });
    (<FormArray>this.companyForm.get('projects')).push(projectFormGroup);
  }

  public removeProject(index: number): void {
    (<FormArray>this.companyForm.get('projects')).removeAt(index);
  }

  public getProjectControl(): AbstractControl[] {
    return (<FormArray>this.companyForm.get('projects')).controls;
  }

  public projectNameValidator(control: AbstractControl): Observable<ValidationErrors | null> {
    const projectName = control.value;
    const projects = this.companyForm.get('projects')?.value;
    const isProjectNameExist = projects.some((project: any) => project.name === projectName);

    return new Observable<ValidationErrors | null>(observer => {
      if (isProjectNameExist) {
        observer.next({ projectNameExist: true });
      } else {
        observer.next(null);
      }
      observer.complete();
    });
  }

  private phoneValidator(control: FormControl): { [key: string]: boolean } | null {
    const validPhoneNumberRegex: RegExp = /^\+91[6-9]\d{9}$/;
    const phoneNumber: string = control.value;
    if (!phoneNumber || validPhoneNumberRegex.test(phoneNumber)) {
      return null;
    } else {
      return { invalidPhoneNumberFormat: true };
    }
  }

  private websiteValidator(control: FormControl): { [key: string]: boolean } | null {
    const validWebsiteRegex: RegExp = /^www\.[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
    const websiteValue: string = control.value;
    if (!websiteValue || validWebsiteRegex.test(websiteValue)) {
      return null;
    } else {
      return { invalidWebsiteFormat: true };
    }
  }

  private whiteSpaceValidator(control: FormControl): { [key: string]: boolean } | null {
    const value = control.value;
    if (value && value.trim() !== value) {
      return { isWhiteSpace: true };
    }
    return null;
  }

  private endDateValidator(control: FormControl): { [key: string]: boolean } | null {
    const startDateControl = control.parent?.get('startDate');
    if (!startDateControl || !startDateControl.touched) {
      return null;
    }
    const startDate = new Date(startDateControl.value);
    const endDate = new Date(control.value);
    if (startDate > endDate) {
      return { isDateValid: true };
    }
    return null;
  }

  private startDateValidator(control: FormControl): { [key: string]: boolean } | null {
    const endDateControl = control.parent?.get('endDate');
    if (!endDateControl || !endDateControl.touched) {
      return null;
    }
    const endDate = new Date(endDateControl.value);
    const startDate = new Date(control.value);
    if (startDate > endDate) {
      return { isStartDateValid: true };
    }
    return null;
  }

}




