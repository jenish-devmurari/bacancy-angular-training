import { Component, Input } from '@angular/core';
import { Store } from '../interfaces/store-interface';
import { StoreService } from '../services/store.service';
import { BookService } from '../services/book.service';
import { Book } from '../interfaces/book-interface';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss'],
  providers: []
})
export class StoreListComponent {

  public stores: Store[] = [];

  constructor(
    private storeService: StoreService,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.stores = this.storeService.getStores();
  }

  public addBook(event: { storeId: number, book: Book }): void {
    this.bookService.addBook(event.storeId, event.book);
  }

}
