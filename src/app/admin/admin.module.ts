import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AddUserComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
