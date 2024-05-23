import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConfirmComponent } from '../confirm/confirm.component';
import { ViewContainerDirective } from '../directives/view-container.directive';
import { Post } from '../interfaces/post.interface';
import { AlertService } from '../services/alert.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
  @ViewChild(ViewContainerDirective, { static: false }) container!: ViewContainerDirective;
  public posts: Post[] = [];
  private subscription: Subscription[] = [];
  constructor(private postService: PostService, private alertService: AlertService) { }

  ngOnInit(): void {
    this.getAllPost();
  }

  public showConfirmDelete(id: number): void {
    this.container.viewContainer.clear();
    const confirmComponent = this.container.viewContainer.createComponent(ConfirmComponent);
    const confirmSub = confirmComponent.instance.confirmed.subscribe(() => {
      this.deletePost(id);
      confirmSub.unsubscribe();
      this.container.viewContainer.clear();
    });
    const cancelSub = confirmComponent.instance.cancelled.subscribe(() => {
      cancelSub.unsubscribe();
      this.container.viewContainer.clear();
    });
  }

  private getAllPost(): void {
    const postSubscription = this.postService.getPosts().subscribe(
      {
        next: (res) => {
          this.posts = res;
        },
        error: (err) => {
          if (this.container && this.container.viewContainer) {
            this.alertService.showAlert(this.container.viewContainer, 'Error while fetching post', 'error');
          }
        }
      }
    )
    this.subscription.push(postSubscription);
  }

  private deletePost(postId: number): void {
    const deleteSubscription = this.postService.deletePost(postId).subscribe({
      next: (res) => {
        this.posts = this.posts.filter((id) => id.id !== postId);
        if (this.container && this.container.viewContainer) {
          this.alertService.showAlert(this.container.viewContainer, 'Post deleted', 'success');
        }
      },
      error: (err) => {
        if (this.container && this.container.viewContainer) {
          this.alertService.showAlert(this.container.viewContainer, 'Error while deleting post', 'error');
        }
      }
    }
    );
    this.subscription.push(deleteSubscription);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.forEach(sub => sub.unsubscribe());
    }
  }
}
