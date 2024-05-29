import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GENDERS, HOBBIES, ROLESOFMEMBERS, emailRegex } from 'src/app/constants/constants';
import { IAdmin } from 'src/app/interfaces/admin.model';
import { IMember } from 'src/app/interfaces/member.model';

import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RegisterService } from 'src/app/services/register.service';

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
  private loggedEmail: string | undefined;

  constructor(private toaster: ToastrService, private localStorage: LocalStorageService, private registerService: RegisterService) { }

  public ngOnInit(): void {
    this.loggedEmail = this.localStorage.getLoggedUserEmail();
    this.initializeForm();
  }

  //initialize form of member 
  public initializeForm(): void {
    this.memberForm = new FormGroup({
      members: new FormArray([])
    });
    if ((this.memberForm.get('members') as FormArray).length === 0) {
      this.addMember();
    }
  }

  // add whole form of members with control inside member form
  public addMember(): void {
    (<FormArray>this.memberForm.get('members')).push(this.createMember());
  }

  // create form control
  public createMember(): FormGroup {
    return new FormGroup({
      firstName: new FormControl(null, [Validators.required, this.whiteSpaceValidator]),
      lastName: new FormControl(null, [Validators.required, this.whiteSpaceValidator]),
      email: new FormControl(null, [Validators.required, Validators.pattern(emailRegex), this.emailExistsValidator.bind(this)]),
      gender: new FormControl(null, [Validators.required]),
      hobbies: new FormControl(null),
      role: new FormControl(null, [Validators.required]),
      salary: new FormControl(null, [Validators.required]),
      contactNumber: new FormControl(null, [Validators.required, this.contactNumberValidator.bind(this)]),
    });
  }

  // get all controls of members of member form
  public getMemberControl(): AbstractControl[] {
    return (<FormArray>this.memberForm.get('members')).controls;
  }

  // remove member form control
  public removeMember(index: number): void {
    (<FormArray>this.memberForm.get('members')).removeAt(index);
  }

  public onSubmit(): void {
    if (this.memberForm.valid) {
      const members: IMember[] = [];
      this.getMemberControl().forEach((member) => {
        const memberData: IMember = {
          firstName: member.get('firstName')?.value,
          lastName: member.get('lastName')?.value,
          email: member.get('email')?.value,
          gender: member.get('gender')?.value,
          hobbies: member.get('hobbies')?.value,
          role: member.get('role')?.value,
          salary: member.get('salary')?.value,
          contactNumber: member.get('contactNumber')?.value,
        };
        members.push(memberData);
      });
      this.addMemberToUser(this.loggedEmail, members);
      this.toaster.success("Member Added successfully")
      this.memberForm.reset();
      (this.memberForm.get('members') as FormArray).clear();
      this.initializeForm();
    } else {
      this.toaster.error("Please fill out the form correctly.");
    }
  }

  public isSubmitDisabled(): boolean {
    const membersArray = (<FormArray>this.memberForm.get('members'));
    return membersArray.length === 0 || this.memberForm.invalid;
  }

  // email exist validator for member
  private emailExistsValidator(control: FormControl): { [key: string]: boolean } | null {
    return this.registerService.isEmailRegister(control.value) ? { emailExists: true } : null;
  }

  // white space validator
  private whiteSpaceValidator(control: FormControl): { [key: string]: boolean } | null {
    const value = control.value;
    return value && value.trim() !== value ? { isWhiteSpace: true } : null;
  }

  // contact number validator
  private contactNumberValidator(control: FormControl): { [key: string]: boolean } | null {
    const validPhoneNumberRegex: RegExp = /^[6-9]\d{9}$/;
    return validPhoneNumberRegex.test(control.value) ? null : { invalidContactNumber: true };
  }

  // add member at particular user
  private addMemberToUser(userEmail: string | undefined, member: IMember[]): void {
    const userData: IAdmin[] = this.localStorage.getUserData()
    for (const admin of userData) {
      const user = admin.users.find(user => user.email === userEmail);
      if (user) {
        user.members = user.members.concat(member);
        this.localStorage.setLocalStorage(userData);
        break;
      }
    }
  }
}
