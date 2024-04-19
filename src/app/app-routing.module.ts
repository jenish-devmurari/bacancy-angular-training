import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [

  { path: '', component: HomeComponent, pathMatch: "full" },
  // { path: '', redirectTo: 'home', pathMatch: "full" }, here we redirect to home page 
  { path: 'home', component: HomeComponent, pathMatch: "full" },
  { path: 'about', component: AboutComponent, pathMatch: "full" },
  { path: 'product-list', component: ProductListComponent, pathMatch: "full" },
  { path: 'product-detail/:id', component: ProductDetailsComponent, pathMatch: "full" },
  { path: 'contact', component: ContactComponent, pathMatch: "full" },
  { path: '**', component: NotFoundComponent, pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
