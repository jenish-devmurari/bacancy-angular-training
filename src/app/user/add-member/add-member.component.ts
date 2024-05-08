import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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
    debugger
    this.addMemberToUser(this.loggedEmail, this.memberForm.value)
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

  public addMemberToUser(userEmail: string | null, member: Member): void {
    debugger
    const userDataString = localStorage.getItem('Users');
    if (userDataString) {
      const userData: Admin[] = JSON.parse(userDataString);
      for (const admin of userData) {
        const user = admin.users.find(user => user.email === userEmail);
        if (user) {
          user.members.push(member);
          localStorage.setItem('Users', JSON.stringify(userData));
          return;
        }
      }
      console.error(`User with email ${userEmail} not found.`);
    } else {
      console.error('No user data found in localStorage.');
    }
  }


}
