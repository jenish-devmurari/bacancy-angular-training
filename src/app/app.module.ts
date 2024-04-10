import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TaskOneComponent } from './task-one/task-one.component';
import { FormsModule } from '@angular/forms';
import { TaskTwoDirective } from './Directive/task-two/task-two.directive';
import { TaskTwoComponent } from './task-two/task-two.component';
import { TaskThreeComponent } from './task-three/task-three.component';
import { TaskFourComponent } from './task-four/task-four.component';
import { TaskThreeDirective } from './Directive/task-three/task-three.directive';


@NgModule({
  declarations: [
    AppComponent,
    TaskOneComponent,
    TaskTwoDirective,
    TaskTwoComponent,
    TaskThreeComponent,
    TaskFourComponent,
    TaskThreeDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
