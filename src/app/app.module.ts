import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { AppRoutingModule } from './app-routing.module';
import { TaskChildComponent } from './task-child/task-child.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskChildComponent,


  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
