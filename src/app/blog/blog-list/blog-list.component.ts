import { Component, Input } from '@angular/core';
import { BlogDetails } from 'src/app/interface/interface';



@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent {


  public blogs: BlogDetails[] = [
    { id: 1, title: 'Blog 1', content: 'Content of Blog 1' },
    { id: 2, title: 'Blog 2', content: 'Content of Blog 2' },
    { id: 3, title: 'Blog 3', content: 'Content of Blog 3' },
    { id: 4, title: 'Blog 4', content: 'Content of Blog 4' },
    { id: 5, title: 'Blog 5', content: 'Content of Blog 5' },
    { id: 6, title: 'Blog 6', content: 'Content of Blog 6' },
    { id: 7, title: 'Blog 7', content: 'Content of Blog 7' },
    { id: 8, title: 'Blog 8', content: 'Content of Blog 8' },
    { id: 9, title: 'Blog 9', content: 'Content of Blog 9' },
    { id: 10, title: 'Blog 10', content: 'Content of Blog 10' },
    { id: 11, title: 'Blog 11', content: 'Content of Blog 11' },
    { id: 12, title: 'Blog 12', content: 'Content of Blog 12' },
    { id: 13, title: 'Blog 13', content: 'Content of Blog 13' },
    { id: 14, title: 'Blog 14', content: 'Content of Blog 14' },
    { id: 15, title: 'Blog 15', content: 'Content of Blog 15' },
    { id: 16, title: 'Blog 16', content: 'Content of Blog 16' },

  ];

  searchItem: string = '';
  searchBlogs: any[] = this.blogs;

  searchBlog() {
    this.searchBlogs = this.blogs.filter((blog) =>
      blog.title.toLowerCase().includes(this.searchItem.toLowerCase())
    );

  }


}
