import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { AuthGuard } from './services/guards/auth-guard.service';
import { CreatePostComponent } from './create-post/create-post.component';
import { UnsavedChangesGuard } from './services/guards/unsaved-change-guard.service';
import { PostsResolver } from './services/resolver/post.resolver';
import { AuthChildGuard } from './services/guards/auth-child-guard.service';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  {
    path: 'post', pathMatch: 'prefix', component: PostComponent, canActivate: [AuthGuard], canActivateChild: [AuthChildGuard], resolve: {
      data: PostsResolver,
    },
    children: [
      {
        path: "detail/:id",
        component: PostDetailComponent,
      },
    ]
  },
  { path: 'create-post', component: CreatePostComponent, pathMatch: 'full', canActivate: [AuthGuard], canDeactivate: [UnsavedChangesGuard] },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
