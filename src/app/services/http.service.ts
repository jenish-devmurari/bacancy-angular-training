import { Injectable } from '@angular/core';
import { Observable, catchError, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interfaces/post.interface';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl: string = "https://jsonplaceholder.typicode.com";
  constructor(private http: HttpClient, private toaster: ToastrService) { }

  // get request for fetch all post data
  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/posts`)
  }

  // get post by id
  public getPostsById(id: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/posts/${id}`);
  }

  // delete post delete request
  public deletePost(id: number): Observable<Post> {
    return this.http.delete<Post>(`${this.apiUrl}/posts/${id}`);
  }

  // create new post post request
  public createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.apiUrl}/posts`, post);
  }

  // edit post put request
  public editPost(post: Post, id: number): Observable<Post> {
    return this.http.put<Post>(`${this.apiUrl}/posts/${id}`, post)
  }
}
