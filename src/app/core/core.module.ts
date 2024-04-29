import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: []
})
export class CoreModule { }
