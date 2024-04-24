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

  constructor(private postService: PostService, private route: ActivatedRoute) {
  }

  public posts!: Post[];
  private postSubscription!: Subscription;

  ngOnInit(): void {
    this.postSubscription = this.postService.getPosts()
      .subscribe(posts => {
        console.log('Posts:', posts);
        this.posts = posts;
        console.log(this.posts);
      });
  }



  public likePost(): void {

  }
  ngOnDestroy(): void {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }

}
