import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../interfaces/post.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  public posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getAllPost();
  }

  public getAllPost(): void {
    this.postService.getPosts().subscribe(
      {
        next: (res) => { this.posts = res },
        error: (err) => { console.log(err) }
      }
    )
  }

  public deletePost(id: number) {
    this.postService.deletePost(id);
  }
}
