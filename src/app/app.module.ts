import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookAddComponent } from './book-add/book-add.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookAddComponent,
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
