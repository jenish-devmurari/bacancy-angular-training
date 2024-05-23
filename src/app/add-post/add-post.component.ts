import { Component, OnDestroy, ViewChild } from '@angular/core';
import { Post } from '../interfaces/post.interface';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { NgForm } from '@angular/forms';
import { ViewContainerDirective } from '../directives/view-container.directive';
import { AlertComponent } from '../alert/alert.component';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent {
  @ViewChild('postData') postData!: NgForm;
  @ViewChild(ViewContainerDirective, { static: false }) container!: ViewContainerDirective;
  constructor(private postService: PostService, private router: Router, private alertService: AlertService) { }

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
          this.alertService.showAlert(this.container.viewContainer, 'Post added successfully', 'success')
          this.postData.reset();
          setTimeout(() => this.router.navigate(['/post']), 1000);
        },
        error: (error) => {
          this.alertService.showAlert(this.container.viewContainer, 'Something wrong happen post is not added ', 'error')
          this.postData.reset();
        }
      });
    } else {
      alert("Please Enter Your Post Data");
    }
  }

  public goBack(): void {
    this.router.navigateByUrl("/post");
  }

}
