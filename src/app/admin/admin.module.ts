import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';


@NgModule({
  declarations: [
    AdminHeaderComponent,
    AdminDashboardComponent,
    AddUserComponent,
    AdminFooterComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
