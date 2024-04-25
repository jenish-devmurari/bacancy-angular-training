import { Component } from '@angular/core';
import { Post } from '../interfaces/post-interface';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {

  constructor(private postService: PostService, private router: Router) {
  }

  public post: Post = {
    id: "",
    title: "",
    content: "",
    likes: 0
  }

  public createPost(): void {
    if (this.post.content !== "" && this.post.title !== "") {
      this.postService.createPost(this.post);
      alert("New Post Created")
      this.post = {
        id: "",
        title: "",
        content: "",
        likes: 0
      }
    } else {
      alert("Please Enter Your Post Data ")
    }
  }

  public goBack(): void {
    this.router.navigateByUrl("/post");
  }

  public hasUnsavedChanges(): boolean {
    return this.post.title !== "" || this.post.content !== "";
  }
}
