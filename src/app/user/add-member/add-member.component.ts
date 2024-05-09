import { Component } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormArray, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, of } from 'rxjs';
import { GENDERS, HOBBIES, ROLESOFMEMBERS } from 'src/app/constants/constants';
import { Admin } from 'src/app/interfaces/admin.interface';
import { Member } from 'src/app/interfaces/member.interface';

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
  private loggedEmail: string | null = "";

  constructor(private toaster: ToastrService) {
  }
  public ngOnInit(): void {
    this.loggedEmail = localStorage.getItem('loggedIn');
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
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"), this.emailExistsValidator.bind(this)]),
      gender: new FormControl('', [Validators.required]),
      hobbies: new FormControl(''),
      role: new FormControl('', [Validators.required]),
      salary: new FormControl(null, [Validators.required]),
      contactNumber: new FormControl('', [Validators.required, this.contactNumberValidator.bind(this)]),
    });
  }

  public getMemberControl(): AbstractControl[] {
    return (<FormArray>this.memberForm.get('members')).controls;
  }

  public removeMember(index: number): void {
    (<FormArray>this.memberForm.get('members')).removeAt(index);
  }

  public onSubmit(): void {
    const members: Member[] = [];
    this.getMemberControl().forEach((member) => {
      const memberData: Member = {
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
    this.addMemberToUser(this.loggedEmail, members)
    this.toaster.success("Member Added successfully")
    this.memberForm.reset();
    (this.memberForm.get('members') as FormArray).clear();
  }

  private emailExistsValidator(control: FormControl): { [key: string]: boolean } | null {
    const email = control.value;
    const exists = this.checkEmailExists(email);
    return exists ? { emailExists: true } : null;
  }

  private checkEmailExists(email: string): boolean {
    const userDataString = localStorage.getItem('Users');
    if (userDataString) {
      const userData: Admin[] = JSON.parse(userDataString);
      for (const admin of userData) {
        if (admin.email === email) {
          return true;
        }
        if (admin.users) {
          for (const user of admin.users) {
            if (user.email === email) {
              return true;
            }
            if (user.members && user.members.some(member => member.email === email)) {
              return true;
            }
          }
        }
      }
    }
    return false;
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

  private addMemberToUser(userEmail: string | null, member: Member[]): void {
    const userDataString = localStorage.getItem('Users');
    if (userDataString) {
      const userData: Admin[] = JSON.parse(userDataString);
      for (const admin of userData) {
        const user = admin.users.find(user => user.email === userEmail);
        if (user) {
          user.members = user.members.concat(member);
          localStorage.setItem('Users', JSON.stringify(userData));
          break;
        }
      }
    }
  }
}
