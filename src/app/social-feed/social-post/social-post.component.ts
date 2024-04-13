import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../interface/post-details';

@Component({
  selector: 'app-social-post',
  templateUrl: './social-post.component.html',
  styleUrls: ['./social-post.component.scss']
})
export class SocialPostComponent {
  @Input() post!: Post;
  @Output() like = new EventEmitter<number>();

  public colorEffect: boolean = false;

  public likePost(postId: number): void {
    this.like.emit(postId);
  }


}
