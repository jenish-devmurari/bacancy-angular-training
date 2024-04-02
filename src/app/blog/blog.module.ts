import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './blog-list/blog-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [BlogListComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [BlogListComponent],
})
export class BlogModule { }
