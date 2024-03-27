import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BlogModule } from './blog/blog.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    HeaderComponent,
    FooterComponent,
   
  ],
  imports: [
    BrowserModule,
    BlogModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  