import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CoreModule } from './core/core.module';
import { ProductModule } from './product/product.module';
import { PaymentModule } from './payment/payment.module';
import { AppRoutingModule } from './app-routing.module';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { HomeModule } from './home/home.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    CoreModule,
    AboutModule,
    ContactModule,
    HomeModule,
    ContactModule,
    AppRoutingModule,

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
