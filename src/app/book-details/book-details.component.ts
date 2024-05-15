import { Component, Input } from '@angular/core';
import { Book } from 'src/app/interface/book-details.interface';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  @Input() selectedBook: Book | undefined;
  @Input() stockCount !: number;

  /**
  * Generates an array representing the star rating of a book.
  * @param rating The rating of the book.
  * @returns An array representing the star rating.
  */
  getStarArray(rating?: number): { filled: boolean; style: { color: string } }[] {
    const ratingRound = rating ? Math.round(rating) : 0;
    const stars: { filled: boolean; style: { color: string } }[] = [];
    for (let i = 1; i <= 5; i++) {
      stars.push({ filled: i <= ratingRound, style: { color: '' } });
    }
    return stars;
  }

  /**
  * Determines the style for a star based on its filled status and the book's rating.
  * @param star The star object.
  * @param rate The rating of the book.
  * @returns The style for the star.
  */
  getStarStyle(star: { filled: boolean; style: any }, rate: number = 0): { color: string } {
    const rating = rate ? rate : 0;
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

