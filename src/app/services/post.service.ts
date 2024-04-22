import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post-interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  private posts: Post[] = [
    { id: 0, title: 'First Post', content: 'This is the first post content.' },
    { id: 1, title: 'Second Post', content: 'This is the second post content.' },
    { id: 2, title: 'Third Post', content: 'This is the third post content.' }
  ];


  public getAllPost(): Post[] {
    return this.posts;
  }

  public getAllPostAsync(): Observable<Post[]> {
    return new Observable((sub) => {
      setTimeout(() => {
        sub.next(this.posts)
      }, 2000)
    })

  }

  public createPost(post: Post): void {
    post.id = this.posts.length;
    this.posts.push(post);
  }

}
