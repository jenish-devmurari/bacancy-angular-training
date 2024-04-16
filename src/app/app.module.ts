import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StoreListComponent } from './store-list/store-list.component';
import { StoreFormComponent } from './store-form/store-form.component';
import { BookListComponent } from './store-list/book-list/book-list.component';
import { BookFormComponent } from './store-list/book-form/book-form.component';
import { BookService } from './services/book.service';
import { StoreService } from './services/store.service';

@NgModule({
  declarations: [
    AppComponent,
    StoreListComponent,
    StoreFormComponent,
    BookListComponent,
    BookFormComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [BookService, StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
