import { Component, Input } from '@angular/core';
import { Store } from '../interfaces/store-interface';
import { StoreService } from '../services/store.service';
import { BookService } from '../services/book.service';
import { Book } from '../interfaces/book-interface';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss']
})
export class StoreListComponent {

  stores: Store[] = [];


  constructor(
    private storeService: StoreService,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    
    this.stores = this.storeService.getStores();
    
  }



}
