import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { BlogListComponent } from './blog-list/blog-list.component';



@NgModule({
  declarations: [
    BlogListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    BlogListComponent 
]
 
})
export class BlogModule { }
