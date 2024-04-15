import { Injectable } from '@angular/core';
import { Store } from '../interfaces/store-interface';

@Injectable({
  providedIn: 'root'
})
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


  constructor() { }

  public addStore(newStore: Store): void {
    newStore.id = this.stores.length;
    console.log(newStore.id);
    this.stores.push(newStore);
  }

  public getStores() {
    return this.stores;
  }




}
