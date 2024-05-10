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

  constructor(private toaster: ToastrService) { }

  public ngOnInit(): void {
    this.loggedEmail = localStorage.getItem('loggedIn');
    this.initializeForm();
  }

  //initialize form of member 
  public initializeForm(): void {
    this.memberForm = new FormGroup({
      members: new FormArray([])
    });
    this.addMember()
  }

  // add whole form of members with control inside member form
  public addMember(): void {
    (<FormArray>this.memberForm.get('members')).push(this.createMember());
  }

  // create form control
  public createMember(): FormGroup {
    return new FormGroup({
      firstName: new FormControl('', [Validators.required, this.whiteSpaceValidator]),
      lastName: new FormControl('', [Validators.required, this.whiteSpaceValidator]),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z]{1}[a-z0-9.]+@[a-z0-9]+\.[a-z]{2,6}$"), this.emailExistsValidator.bind(this)]),
      gender: new FormControl('', [Validators.required]),
      hobbies: new FormControl(''),
      role: new FormControl('', [Validators.required]),
      salary: new FormControl(null, [Validators.required]),
      contactNumber: new FormControl('', [Validators.required, this.contactNumberValidator.bind(this)]),
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

  public isSubmitDisabled(): boolean {
    const membersArray = (<FormArray>this.memberForm.get('members'));
    return membersArray.length === 0 || this.memberForm.invalid;
  }

  // email exist validator for member
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

  // white space validator
  private whiteSpaceValidator(control: FormControl): { [key: string]: boolean } | null {
    const value = control.value;
    if (value && value.trim() !== value) {
      return { isWhiteSpace: true };
    }
    return null;
  }

  // contact number validator
  private contactNumberValidator(control: FormControl): { [key: string]: boolean } | null {
    const validPhoneNumberRegex: RegExp = /^[6-9]\d{9}$/;
    const contactNumber: string = control.value;
    if (!contactNumber || validPhoneNumberRegex.test(contactNumber)) {
      return null;
    } else {
      return { invalidContactNumber: true };
    }
  }

  // add member at particular user
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
