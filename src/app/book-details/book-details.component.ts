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

  getStarArray(rating: number): { filled: boolean; style: { color: string } }[] {
    const ratingRound = Math.round(rating);
    const stars: { filled: boolean; style: { color: string } }[] = [];
    for (let i = 1; i <= 5; i++) {
      stars.push({
        filled: i <= ratingRound, style: {
          color: ''
        }
      });
    }
    return stars;
  }

  getStarStyle(star: { filled: boolean; style: any }, rating: number): { color: string } {
    if (star.filled) {
      if (rating > 4) {
        return { color: 'green' };
      } else if (rating >= 3) {
        return { color: 'yellow' };
      } else {
        return { color: 'red' };
      }
    } else {
      return { color: 'grey' };
    }
  }

}
