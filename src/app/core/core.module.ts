import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { CollegeComponent } from './college/college.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    HomeComponent,
    CompanyComponent,
    CollegeComponent,
    NotFoundComponent,

  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    CompanyComponent,
    CollegeComponent,
    NotFoundComponent
  ]
})
export class CoreModule { }
