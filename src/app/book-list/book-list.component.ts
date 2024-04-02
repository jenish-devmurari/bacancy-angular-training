import { Component, Input } from '@angular/core';
import { Book } from '../interface/book-details';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {

  @Input() book !: Book;

}
