import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { PostService } from '../post.service';


@Injectable({
  providedIn: 'root'
})
export class PostsResolver implements Resolve<any> {
  constructor(private postService: PostService) { }

  resolve(): Observable<any> {
    return this.postService.getAllPost();
  }
}
