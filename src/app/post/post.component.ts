import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../interfaces/post-interface';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public posts: Post[] = [];
  private postSubscription!: Subscription;

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.postService.getAllPost().subscribe(posts => {
      this.posts = posts;
    })
    this.postSubscription = this.postService.posts$.subscribe(posts => {
      this.posts = posts;
    });
  }

  public likePost(id: string): void {
    const post = this.posts.find(post => post.id === id);
    if (post) {
      this.postService.likePost(id, post.likes);
    }
  }

  public deletePost(id: string) {
    this.postService.deletePost(id);
  }

  ngOnDestroy(): void {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }

}
