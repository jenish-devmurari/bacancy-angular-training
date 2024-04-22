import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { BookService } from './services/book.service';
import { StoreService } from './services/store.service';
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
