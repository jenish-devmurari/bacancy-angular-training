import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { HttpComponent } from './http/http.component';
import { UserFooterComponent } from './user-footer/user-footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user.component';


@NgModule({
  declarations: [
    UserHeaderComponent,
    UserDashboardComponent,
    AddMemberComponent,
    HttpComponent,
    UserFooterComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserRoutingModule
  ]
})
export class UserModule { }
