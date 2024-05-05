import { Component, Input } from '@angular/core';
import { Book } from 'src/app/interface/book-details.interface';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  @Input() selectedBook !: Book;
  @Input() stockCount !: number;

  getStarArray(rating: number): number[] {
    const ratingRound = Math.round(rating);
    const stars: number[] = [];
    for (let i = 1; i <= ratingRound; i++) {
      stars.push(i);
    }
    return stars;
  }

  getStarStyle(rating: number): any {
    if (rating > 4) {
      return { color: 'green' };
    } else if (rating >= 3) {
      return { color: 'yellow' };
    } else {
      return { color: 'red' };
    }
  }




}
