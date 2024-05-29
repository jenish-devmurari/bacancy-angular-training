import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomPreloadingStrategyService } from './services/custom-preloading-strategy.service';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'product', pathMatch: 'prefix',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
    data: { preload: true, delay: 1000 }
  },
  {
    path: 'cart', pathMatch: 'prefix',
    loadChildren: () => import('./cart/cart.module').then(m => m.CartModule),
    data: { preload: true, delay: 3000 }
  },
  {
    path: '**', redirectTo: 'home'
  }
];

@NgModule({
  /**
   * custom preloading 
   */
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingStrategyService })],

  /**
   * preload all modules
   */
  // imports: [RouterModule.forRoot(routes, {
  //   preloadingStrategy: PreloadAllModules
  // })],

  /**
 * No Preloading 
 */
  // imports: [RouterModule.forRoot(routes, {
  //   preloadingStrategy: NoPreloading
  // })],
  // exports: [RouterModule]
})
export class AppRoutingModule { }
