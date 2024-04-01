import { Component, Input } from '@angular/core';
import { BlogDetails } from '../interface/interface';


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
    { id: 5, title: 'Blog 1', content: 'Content of Blog 1' },
    { id: 6, title: 'Blog 2', content: 'Content of Blog 2' },
    { id: 7, title: 'Blog 3', content: 'Content of Blog 3' },
    { id: 8, title: 'Blog 4', content: 'Content of Blog 4' },
    { id: 9, title: 'Blog 1', content: 'Content of Blog 1' },
    { id: 10, title: 'Blog 2', content: 'Content of Blog 2' },
    { id: 11, title: 'Blog 3', content: 'Content of Blog 3' },
    { id: 12, title: 'Blog 4', content: 'Content of Blog 4' },
    { id: 13, title: 'Blog 1', content: 'Content of Blog 1' },
    { id: 14, title: 'Blog 2', content: 'Content of Blog 2' },
    { id: 15, title: 'Blog 3', content: 'Content of Blog 3' },
    { id: 16, title: 'Blog 4', content: 'Content of Blog 4' },

  ];

  searchItem: string = '';
  searchBlogs: any[] = this.blogs;

  searchBlog() {
    if (this.searchItem.trim() === '') {
      this.searchBlogs = this.blogs;
    }
    else {
      this.searchBlogs = this.searchBlogs.filter(b => b.title.toLowerCase().includes(this.searchItem.toLowerCase()));
    }

    if (this.searchItem.trim() !== '' && this.searchBlogs.length === 0) {
      alert('No blogs found matching the search criteria.');
    }

  }


}
