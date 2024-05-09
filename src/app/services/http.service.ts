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

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/posts`)
  }

  public getPostsById(id: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/posts/${id}`);
  }

  public deletePost(id: number): Observable<Post> {
    return this.http.delete<Post>(`${this.apiUrl}/posts/${id}`);
  }

  public createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.apiUrl}/posts`, post);
  }

  public editPost(post: Post, id: number): Observable<Post> {
    return this.http.put<Post>(`${this.apiUrl}/posts/${id}`, post)
  }
}
