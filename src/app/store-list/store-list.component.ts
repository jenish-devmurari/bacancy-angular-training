import { Component, Input } from '@angular/core';
import { Store } from '../interfaces/store-interface';
import { StoreService } from '../services/store.service';
import { BookService } from '../services/book.service';
import { Book } from '../interfaces/book-interface';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss'],

})
export class StoreListComponent {

  public storeId: number = 2;
  stores: Store[] = [];
  // storeId !: number;
  constructor(
    private storeService: StoreService,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.stores = this.storeService.getStores();
  }

  
  addBook(event: { storeId: number, book: Book }, storeId: number) {
    console.log('event.storeId', event.storeId)
    console.log('storeId', storeId);
    this.bookService.addBook(event.storeId, event.book);
  }

}
