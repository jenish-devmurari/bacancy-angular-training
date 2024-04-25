import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { Post } from '../interfaces/post-interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public postsSubject: Subject<Post[]> = new Subject<Post[]>();
  public posts$: Observable<Post[]> = this.postsSubject.asObservable();

  private apiUrl: string = "https://mypost-64d44-default-rtdb.firebaseio.com/posts.json"

  constructor(private httpClient: HttpClient) { }

  public createPost(post: Post): void {
    this.httpClient.post<{ name: String }>(this.apiUrl, post).subscribe(() =>
      this.getAllPost()
    )
  }

  public getAllPost(): Observable<Post[]> {
    return this.httpClient.get<{ [key: string]: Post }>(this.apiUrl).pipe(
      map(response => {
        let postsArray: Post[] = [];
        for (let key in response) {
          if (response.hasOwnProperty(key)) {
            postsArray.push({ ...response[key], id: key });
          }
        }
        this.postsSubject.next(postsArray)
        return postsArray;
      })
    )
  }

  public deletePost(id: string): void {
    const apiUrl = "https://mypost-64d44-default-rtdb.firebaseio.com/posts/" + id + ".json"
    this.httpClient.delete(apiUrl).subscribe(() => {
      this.getAllPost().subscribe(posts => {
        this.postsSubject.next(posts);
      });
    });
  }

  public likePost(id: string, likes: number): void {
    const apiUrl = "https://mypost-64d44-default-rtdb.firebaseio.com/posts/" + id + ".json"
    const updatedLikes = { likes: ++likes };
    this.httpClient.patch(apiUrl, updatedLikes).subscribe(() => {
      this.getAllPost().subscribe(posts => {
        this.postsSubject.next(posts);
      });
    });
  }
}
