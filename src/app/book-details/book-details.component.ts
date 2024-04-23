import { Component, Input } from '@angular/core';
import { Book } from 'src/app/interface/book-details';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  @Input() selectedBook !: Book;


  getStarArray(rating: number): number[] {
    const stars: number[] = [];
    for (let i = 1; i <= rating; i++) {
      stars.push(i);
    }
    return stars;
  }

  getStarStyle(rating: number): any {
    if (rating >= 4) {
      return { color: 'green' };
    } else if (rating >= 3) {
      return { color: 'yellow' };
    } else {
      return { color: 'red' };
    }
  }




}
