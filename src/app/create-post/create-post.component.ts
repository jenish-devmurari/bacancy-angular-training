import { Component } from '@angular/core';
import { Post } from '../interfaces/post-interface';
import { AuthService } from '../services/auth.service';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {

  constructor(private postService: PostService, private router: Router) {

  }

  public post: Post = {
    id: 0,
    title: "",
    content: "",
  }

  public createPost(): void {
    if (this.post.content !== "" && this.post.title !== "") {
      this.postService.createPost(this.post);
      alert("New Post Created")
      this.post = {
        id: 0,
        title: "",
        content: "",
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
