import { Component, OnInit } from '@angular/core';
import { Post } from './interface/post-details';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-social-feed',
  templateUrl: './social-feed.component.html',
  styleUrls: ['./social-feed.component.scss']
})
export class SocialFeedComponent implements OnInit {

  postList: Post[] = [
    {
      id: 0, content: "Social Post ", likes: 0,
      imgUrl: 'assets/bacancy.png'
    },
    {
      id: 1, content: "Social Post ", likes: 0,
      imgUrl: 'assets/bacancy.png'
    },
    {
      id: 2, content: "Social Post ", likes: 0,
      imgUrl: 'assets/bacancy.png'
    },
  ];

  public stopFeed: boolean = false;


  ngOnInit() {

    const postsObservable = new Observable<Post[]>(observer => {
      observer.next(this.postList);

      const intervalPost = setInterval(() => {
        if (!this.stopFeed) {
          const newPost = { id: this.postList.length, imgUrl: 'assets/bacancy.png', content: `Bacancy Technology LLP`, likes: 0 };
          this.postList.push(newPost);
          observer.next(this.postList);
        } else {
          clearInterval(intervalPost);
          observer.complete();
        }
      }, 3000);

    });

    postsObservable.subscribe(post => {
      this.postList = post;
    });
  }

  likePost(postId: number): void {
    const postIndex = this.postList.findIndex(post => post.id === postId);
    if (postIndex !== -1) {
      this.postList[postIndex].likes++;
    }
  }

  public stopFeedOfPost(): void {
    this.stopFeed = true;
  }


}
