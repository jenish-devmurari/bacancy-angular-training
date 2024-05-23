import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { AddPostComponent } from './add-post/add-post.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'post', pathMatch: 'full'
  },
  {
    path: 'post', component: PostListComponent, pathMatch: 'full'
  },
  {
    path: 'add-post', component: AddPostComponent, pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'post'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
