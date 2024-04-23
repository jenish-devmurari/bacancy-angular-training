import { Component } from '@angular/core';
import { Store } from '../interfaces/store.interface';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.scss'],
})
export class BookStoreComponent {

  public stores: Store[] = [];
  public store: Store = { id: 0, name: '', owner: '' };

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.stores = this.storeService.getStore();
  }

  // Add Store
  public addStore(): void {
    if (this.store.name && this.store.owner) {
      this.storeService.addStore(this.store);
      this.store = { id: 0, name: '', owner: '' };
    } else {
      alert('Please enter all fields to add a bookstore.');
    }
  }
}
