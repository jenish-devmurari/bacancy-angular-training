import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'product-list', pathMatch: 'full'
  },
  {
    path: 'product-list', component: ProductListComponent, pathMatch: 'full'
  },
  {
    path: 'detail', pathMatch: 'prefix',
    loadChildren: () => import('./product-detail/product-detail.module').then(m => m.ProductDetailModule),
    data: { preload: true,delay:2000}
  },
  {
    path: '**', redirectTo: 'product-list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
