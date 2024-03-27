import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent {
    
  @Input() blogs: { title: string, content: string }[] = [];

  searchItem: string = '';
  searchBlogs : { title: string, content: string }[] = [];

  searchBlog() {
    this.searchBlogs = this.blogs.filter(b => b.title.toLowerCase().includes(this.searchItem.toLowerCase()));
  }

  
}
