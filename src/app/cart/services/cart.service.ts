import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private toaster: ToastrService) { }

  public call(): void {
    this.toaster.success("cart service called")
  }
}
