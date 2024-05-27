import { Injectable } from '@angular/core';
import { Observable, catchError, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IPost } from '../interfaces/post.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl: string = "https://jsonplaceholder.typicode.com";
  constructor(private http: HttpClient) { }

  // get request for fetch all post data
  public getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${this.apiUrl}/posts`);
  }

  // get post by id
  public getPostsById(id: number): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${this.apiUrl}/posts/${id}`);
  }

  // delete post delete request
  public deletePost(id: number): Observable<IPost> {
    return this.http.delete<IPost>(`${this.apiUrl}/posts/${id}`);
  }

  // create new post post request
  public createPost(post: IPost): Observable<IPost> {
    return this.http.post<IPost>(`${this.apiUrl}/posts`, post);
  }

  // edit post put request
  public editPost(post: IPost, id: number): Observable<IPost> {
    return this.http.put<IPost>(`${this.apiUrl}/posts/${id}`, post)
  }
}
