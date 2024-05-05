import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookActionComponent } from './book-action/book-action.component';
import { BookComponent } from './book/book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CoreModule } from './core/core.module';
import { ContentProjectionComponent } from './content-projection/content-projection.component';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookActionComponent,
    BookComponent,
    BookDetailsComponent,
    ContentProjectionComponent,



  ],
  imports: [
    BrowserModule,
    CoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
