import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private toaster : ToastrService) { }

  public call() : void{
    this.toaster.success("Shared service called")
  }
}
