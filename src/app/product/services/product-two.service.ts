import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ProductTwoService {

  constructor(private toaster: ToastrService) { }

  public call(): void {
    this.toaster.success("Product-two service called")
  }
}
