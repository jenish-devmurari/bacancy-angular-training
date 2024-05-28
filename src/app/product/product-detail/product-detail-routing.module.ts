import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail.component';

const routes: Routes = [
  {
    path: ':id', component: ProductDetailComponent, pathMatch: 'full'
  },
  {
    path: ':id/review', pathMatch: 'prefix',
    loadChildren: () => import('./view-review/view-review.module').then(m => m.ViewReviewModule),
    data: { preload: true, delay: 2000 }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductDetailRoutingModule { }
