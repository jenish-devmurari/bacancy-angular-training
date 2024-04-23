import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BookStoreComponent } from './book-store/book-store.component';
import { ListBookComponent } from './list-book/list-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BookStoreComponent,
    ListBookComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
