import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '../interfaces/store-interface';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-store-form',
  templateUrl: './store-form.component.html',
  styleUrls: ['./store-form.component.scss'],
  providers: []
})
export class StoreFormComponent {

  public store: Store = { id: 0, name: '', owner: '' };

  constructor(private storeService: StoreService) { }

  public addStore(): void {
    this.storeService.addStore(this.store);
    this.store = { id: 0, name: '', owner: '' };
  }

}
