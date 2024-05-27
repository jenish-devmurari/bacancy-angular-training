import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskFiveComponent } from './task-five/task-five/task-five.component';
import { TaskOneAndTwoComponent } from './task-one-and-two/task-one-and-two.component';
import { TaskSixAndSevenComponent } from './task-six-and-seven/task-six-and-seven/task-six-and-seven.component';
import { TaskThreeAndFourChildComponent } from './task-three-and-four/task-three-and-four-child/task-three-and-four-child.component';
import { TaskThreeAndFourComponent } from './task-three-and-four/task-three-and-four/task-three-and-four.component';



@NgModule({
  declarations: [
    AppComponent,
    TaskOneAndTwoComponent,
    TaskThreeAndFourComponent,
    TaskThreeAndFourChildComponent,
    TaskFiveComponent,
    TaskSixAndSevenComponent

  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
