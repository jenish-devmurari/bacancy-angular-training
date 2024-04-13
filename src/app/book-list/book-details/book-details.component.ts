import { Component, Input } from '@angular/core';
import { Book } from 'src/app/interface/book-details';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  @Input() selectedBook !: Book;

 

  

}
