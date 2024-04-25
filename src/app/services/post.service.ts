import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Post } from '../interfaces/post-interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  private apiUrl: string = "https://mypost-64d44-default-rtdb.firebaseio.com/posts.json"

  public createPost(post: Post): void {
    this.httpClient.post<{ name: String }>(this.apiUrl, post).subscribe(
      (response) => {
        console.log("Post created successfully:", response);
      },
      (error) => {
        console.error("Error creating post:", error);
      }
    );
  }

  public getAllPostAsync(): Observable<Post[]> {
    return this.httpClient.get<{ [key: string]: Post }>(this.apiUrl).pipe(
      map(response => {
        console.log("Response From Backend: ", response)
        let postsArray: Post[] = [];
        for (let key in response) {
          debugger
          if (response.hasOwnProperty(key)) {
            postsArray.push({ ...response[key], id: key });
          }
        }
        return postsArray;
      })
    );
  }



  public deletePost(id: string) {
    debugger
    const apiUrl = "https://mypost-64d44-default-rtdb.firebaseio.com/posts/" + id + ".json"
    this.httpClient.delete(apiUrl)
      .subscribe(
        (response) => {
          console.log("Post deleted successfully:", response);
        },
        (error) => {
          console.error("Error while deleting post:", error);
        }
      )
  }

  public likePost(id: string, likes: number) {
    const apiUrl = "https://mypost-64d44-default-rtdb.firebaseio.com/posts/" + id + ".json"
    const updatedLikes = { likes: likes };
    console.log(likes);
    this.httpClient.patch(apiUrl, updatedLikes)
      .subscribe(
        (response) => {
          console.log("Post like Updated successfully:", response);
        },
        (error) => {
          console.error("Error while Update Like:", error);
        }
      )
  }
}
