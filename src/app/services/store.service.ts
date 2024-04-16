import { Injectable } from '@angular/core';
import { Store } from '../interfaces/store-interface';
import { BookService } from './book.service';

@Injectable()
export class StoreService {

  public stores: Store[] = [
    {
      id: 0,
      name: 'Store 1',
      owner: 'Owner 1'
    },
    {
      id: 1,
      name: 'Store 2',
      owner: 'Owner 2'
    },
    {
      id: 2,
      name: 'Store 3',
      owner: 'Owner 3'
    },
  ];


  constructor(private bookService: BookService) { }

  public addStore(newStore: Store): void {
    newStore.id = this.stores.length;
    this.stores.push(newStore);
    this.bookService.addBooksStore(newStore.id); // Update BookService with the new store ID
  }
  public getStores() {
    return this.stores;
  }




}
