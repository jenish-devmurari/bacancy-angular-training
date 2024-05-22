import { Component, ViewChild } from '@angular/core';
import { Post } from '../interfaces/post.interface';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent {
  @ViewChild('postData') postData!: NgForm;

  constructor(private postService: PostService, private router: Router) { }

  public post: Post = {
    userId: 0,
    id: 0,
    title: '',
    body: ''
  };

  public addPost(form: NgForm): void {
    if (form.valid) {
      this.postService.createPost(this.post).subscribe({
        next: (response) => {
          alert("New Post Created");
          this.postData.reset();
        },
        error: (error) => {
          alert("An error occurred while creating the post");
        }
      });
    } else {
      alert("Please Enter Your Post Data");
    }
  }

  public goBack(): void {
    this.router.navigateByUrl("/post");
  }

  public hasUnsavedChanges(): boolean {
    return this.post.title !== "" || this.post.body !== "";
  }
}
