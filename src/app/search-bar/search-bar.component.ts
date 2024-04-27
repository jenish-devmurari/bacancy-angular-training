import { Component } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  query: string = ''
  category: string = '';
  priceRange: string = '';

  constructor(private bookService: BookService) { }

  search(): void {
    debugger
    this.bookService.searchBooks(this.query, this.category, this.priceRange);
    this.query = ''
    this.category = '';
    this.priceRange = '';
  }
}
