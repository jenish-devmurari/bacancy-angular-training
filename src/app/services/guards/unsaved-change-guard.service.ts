import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { CreatePostComponent } from 'src/app/create-post/create-post.component';


@Injectable({
    providedIn: 'root'
})
export class UnsavedChangesGuard implements CanDeactivate<CreatePostComponent> {
    canDeactivate(component: CreatePostComponent): Observable<boolean> | boolean {
        if (component.hasUnsavedChanges()) {
            return window.confirm('Are you sure you want to leave? Your changes will be lost.');
        }
        return true;
    }
}