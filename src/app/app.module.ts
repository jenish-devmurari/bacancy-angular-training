import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { ToDoEffects } from './store/to-do/effect/to-do.effects';
import { todoReducer } from './store/to-do/reducers/to-do.reducer';
import { ToDoComponent } from './to-do/to-do.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ todos: todoReducer }),
    EffectsModule.forRoot([ToDoEffects]),
    StoreDevtoolsModule.instrument({ name: 'Ngrx Task Todo List', maxAge: 25 })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
