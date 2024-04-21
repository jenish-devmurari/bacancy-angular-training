import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../interfaces/post-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(private postService: PostService, private route: ActivatedRoute) {
  }

  public posts !: Post[]

  ngOnInit(): void {
    this.posts = this.route.snapshot.data['data'];
  }


}
