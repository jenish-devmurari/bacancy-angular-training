import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interfaces/post-interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  private posts: Post[] = [
    // {
    //   id: 0, title: 'First Post', content: 'This is the first post content.',
    //   likes: 0
    // },
    // {
    //   id: 1, title: 'Second Post', content: 'This is the second post content.',
    //   likes: 0
    // },
    // {
    //   id: 2, title: 'Third Post', content: 'This is the third post content.',
    //   likes: 0
    // }
  ];

  private apiUrl: string = "https://mypost-64d44-default-rtdb.firebaseio.com/posts.json"


  public getAllPost(): Post[] {
    return this.posts;
  }

  public getAllPostAsync(): Observable<Post[]> {
    return new Observable((sub) => {
      setTimeout(() => {
        sub.next(this.posts)
      }, 1000)
    })

  }

  public createPost(post: Post): void {
    debugger
    this.httpClient.post(this.apiUrl + "posts.json", post).subscribe(
      (response) => {
        console.log("Post created successfully:", response);
      },
      (error) => {
        console.error("Error creating post:", error);
      }
    );
  }

  public getPosts(): Observable<Post[]> {
    debugger
    return this.httpClient.get<Post[]>(this.apiUrl + "posts.json");
  }


}
