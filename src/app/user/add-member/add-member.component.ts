import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { GENDERS, HOBBIES, ROLESOFMEMBERS } from 'src/app/constants/constants';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent {
  public memberForm !: FormGroup
  public genders: string[] = GENDERS
  public hobbies: string[] = HOBBIES
  public roleOfMember: string[] = ROLESOFMEMBERS
  public adminList: string[] = []

  public ngOnInit(): void {
    this.initializeForm();
  }

  public initializeForm(): void {
    this.memberForm = new FormGroup({
      members: new FormArray([])
    });
    this.addMember()
  }

  public addMember(): void {
    (<FormArray>this.memberForm.get('members')).push(this.createMember());
  }

  public createMember(): FormGroup {
    return new FormGroup({
      firstName: new FormControl('', [Validators.required, this.whiteSpaceValidator]),
      lastName: new FormControl('', [Validators.required, this.whiteSpaceValidator]),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")]),
      gender: new FormControl('', [Validators.required]),
      hobbies: new FormControl(''),
      role: new FormControl('', [Validators.required]),
      salary: new FormControl(null, [Validators.required]),
      contactNumber: new FormControl('', [Validators.required, this.contactNumberValidator]),
    });
  }

  public getMemberControl(): AbstractControl[] {
    return (<FormArray>this.memberForm.get('members')).controls;
  }

  public removeMember(index: number): void {
    (<FormArray>this.memberForm.get('members')).removeAt(index);
  }

  public onSubmit(): void {
    this.memberForm.reset();
    (this.memberForm.get('members') as FormArray).clear();
  }

  private whiteSpaceValidator(control: FormControl): { [key: string]: boolean } | null {
    const value = control.value;
    if (value && value.trim() !== value) {
      return { isWhiteSpace: true };
    }
    return null;
  }

  private contactNumberValidator(control: FormControl): { [key: string]: boolean } | null {
    const validPhoneNumberRegex: RegExp = /^[6-9]\d{9}$/;
    const contactNumber: string = control.value;
    if (!contactNumber || validPhoneNumberRegex.test(contactNumber)) {
      return null;
    } else {
      return { invalidContactNumber: true };
    }
  }

  public isSubmitDisabled(): boolean {
    const membersArray = (<FormArray>this.memberForm.get('members'));
    return membersArray.length === 0 || this.memberForm.invalid;
  }
}
