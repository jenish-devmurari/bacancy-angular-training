import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/interfaces/post.interface';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit, OnDestroy {

  public posts: Post[] = [];
  public searchId !: number
  public newPost: Post = {
    userId: 0,
    id: 0,
    title: '',
    body: ''
  }
  private subscription: Subscription[] = [];

  constructor(private httpService: HttpService, private toaster: ToastrService) {
  }

  ngOnInit(): void {
    const postSubscription = this.httpService.getPosts().subscribe({
      next: (res) => { this.posts = res; },
      error: () => { this.toaster.error("Error while fetching post ") }
    }
    )
    this.subscription.push(postSubscription);
  }


  public getPostById(id: number): void {
    const postSubscriptionById = this.httpService.getPostsById(id).subscribe({
      next: (res) => { console.log(res) },
      error: (err) => {
        let errorMessage = 'An error occurred';
        if (err.error && err.error.message) {
          errorMessage = err.error.message;
        } else if (err.status === 404) {
          errorMessage = 'Post not found';
        }
        this.toaster.error(errorMessage);
      }
    })
    this.subscription.push(postSubscriptionById);
  }

  public deletePost(id: number): void {
    const deletePostSubscription = this.httpService.deletePost(id).subscribe(
      {
        next: (res) => { console.log(res) },
        error: () => { this.toaster.error("Error while deleting post ") }
      }
    )
    this.subscription.push(deletePostSubscription);
  }

  public createPost(): void {
    this.httpService.createPost(this.newPost).subscribe({
      next: (res) => { console.log(res) },
      error: () => { this.toaster.error("Error while creating post ") }
    })
    this.newPost = {
      userId: 0,
      id: 0,
      title: '',
      body: ''
    }
  }

  ngOnDestroy(): void {
    this.subscription.forEach(sub => sub.unsubscribe())
  }
}
