import { Component, OnInit } from '@angular/core';
import { AsyncValidator, AsyncValidatorFn, FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {


  public companyForm !: FormGroup;

  public existingProjects = ['Project1', 'Project2', 'Project3'];

  ngOnInit(): void {
    this.initializeForm();
  }

  public onSubmit() {
    console.log(this.companyForm.value);
    this.companyForm.reset();
  }

  public initializeForm() {
    this.companyForm = new FormGroup({
      name: new FormControl('Bacancy Technology LLP', [Validators.required]),
      email: new FormControl('bacancy@bacancy.com', [Validators.required, Validators.email]),
      website: new FormControl('www.bacancy.com', [Validators.required, this.websiteValidator]),
      phone: new FormControl('+91-1234567890', [Validators.required, this.phoneValidator]),
      projects: new FormArray([])
    });
  }

  public addProject() {
    const projectFormGroup = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [this.projectNameValidator as AsyncValidatorFn],
        updateOn: 'blur',
      }),
      description: new FormControl(null, [Validators.required]),
      startDate: new FormControl(null, [Validators.required]),
      endDate: new FormControl(null, [Validators.required])
    });
    (<FormArray>this.companyForm.get('projects')).push(projectFormGroup);
  }

  public removeProject(index: number) {
    (<FormArray>this.companyForm.get('projects')).removeAt(index);
  }

  public getProjectControl() {
    return (<FormArray>this.companyForm.get('projects')).controls;
  }

  private phoneValidator(control: FormControl): ValidationErrors | null {
    const validPhoneNumberRegex: RegExp = /^\+91-\d{10}$/;
    const value: string = control.value;
    if (!value || validPhoneNumberRegex.test(value)) {
      return null;
    } else {
      return { invalidPhoneNumberFormat: true };
    }
  }

  private websiteValidator(control: FormControl): ValidationErrors | null {
    const validWebsiteRegex: RegExp = /^www\.[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
    const value: string = control.value;

    if (!value || validWebsiteRegex.test(value)) {
      return null;
    } else {
      return { invalidWebsiteFormat: true };
    }
  }

  private projectNameValidator(control: FormControl): Observable<ValidationErrors | null> {

    return new Observable<ValidationErrors | null>(observer => {
      setTimeout(() => {
        const value = control.value;
        let projectNameExists = false;
        for (const project of this.existingProjects) {
          if (project === value) {
            projectNameExists = true;
            break;
          }
        }
        if (projectNameExists) {
          observer.next({ projectNameExists: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });

  }

}




