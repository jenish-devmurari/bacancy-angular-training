import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { AddBookComponent } from './add-book/add-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorInterceptor } from './interceptor/error.interceptor';
import { SearchBarComponent } from './search-bar/search-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    AddBookComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,


  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
