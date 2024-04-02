import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Book } from '../interface/book-details';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BookListComponent {

  @Input() book !: Book;

  @Output('notifyAlias') notifyEvent = new EventEmitter<string>();

  notify(): void {
    this.notifyEvent.emit(this.book.title);
  }

}
