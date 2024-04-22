import { Injectable } from '@angular/core';
import { Store } from '../interfaces/store-interface';
import { BookService } from './book.service';

@Injectable()
export class StoreService {

  private storeList: Store[] = [
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

  public getStore(): Store[] {
    return this.storeList;
  }

  public addStore(newStore: Store): void {
    newStore.id = this.generateUniqueId();
    this.storeList.push(newStore);
    alert("Store Added")
  }

  private generateUniqueId(): number {
    const lastBook = this.storeList[this.storeList.length - 1];
    return lastBook ? lastBook.id + 1 : 1;
  }

}
