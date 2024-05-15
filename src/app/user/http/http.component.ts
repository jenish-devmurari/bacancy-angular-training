import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Post } from 'src/app/interfaces/post.interface';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {
  public posts: Post[] = [];
  public searchId !: number;
  public searchPost: Post[] = [];
  public selectedPost!: Post;
  public newPost: Post = {
    userId: 0,
    id: 0,
    title: '',
    body: ''
  }
  public loadingPosts: boolean = false;

  constructor(private httpService: HttpService, private toaster: ToastrService) {
    this.selectedPost = {
      userId: 0,
      id: 0,
      title: '',
      body: ''
    }
  }

  public ngOnInit(): void {
    // initial post 
    this.fetchPost();
  }

  // get post by id 
  public getPostById(id: number): void {
    this.loadingPosts = true;
    this.httpService.getPostsById(id).subscribe({
      next: () => {
        this.searchPost = this.posts.filter(p => p.id == id);
        this.loadingPosts = false;
      },
      error: (err) => {
        let errorMessage = 'An error occurred';
        if (err.error && err.error.message) {
          errorMessage = err.error.message;
        } else if (err.status === 404) {
          errorMessage = 'Post not found';
        }
        this.toaster.error(errorMessage);
        this.loadingPosts = false;
      }
    })
  }

  // delete post delete request
  public deletePost(id: number): void {
    this.httpService.deletePost(id).subscribe(
      {
        next: () => {
          this.posts = this.posts.filter(p => p.id !== id);
          this.toaster.success("Post deleted")
        },
        error: () => { this.toaster.error("Error while deleting post ") }
      }
    )
  }

  // create post post request
  public createPost(): void {
    this.httpService.createPost(this.newPost).subscribe({
      next: (res) => {
        this.posts.push(res);
        this.toaster.success("New Post Added")
      },
      error: () => { this.toaster.error("Error while creating post ") }
    })
    this.newPost = {
      userId: 0,
      id: 0,
      title: '',
      body: ''
    }
  }

  public openEditModal(post: Post): void {
    this.selectedPost = { ...post };
  }

  // edit post put request
  public editPost(): void {
    this.httpService.editPost(this.selectedPost, this.selectedPost.id).subscribe({
      next: (res) => {
        const index = this.posts.findIndex(p => p.id === this.selectedPost.id);
        if (index !== -1) {
          this.posts[index] = { ...this.selectedPost };
          this.toaster.success("Post edited")
        }
      },
      error: () => { this.toaster.error("Error while editing post ") }
    }
    )
  }

  // fetch post
  private fetchPost(): void {
    this.loadingPosts = true;
    this.httpService.getPosts().subscribe({
      next: (res) => { this.posts = res; this.loadingPosts = false; },
      error: (err) => { this.toaster.error(err); this.loadingPosts = false; } // global interceptor error 
    }
    )
  }


}
