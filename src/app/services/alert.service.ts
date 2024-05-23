import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { AlertComponent } from '../alert/alert.component';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  public showAlert(container: ViewContainerRef, message: string, type: 'success' | 'error'): void {
    container.clear();
    const alertComponentRef: ComponentRef<AlertComponent> = container.createComponent(AlertComponent);
    alertComponentRef.instance.message = message;
    alertComponentRef.instance.type = type;
    const closeSub = alertComponentRef.instance.dismissed.subscribe(() => {
      closeSub.unsubscribe();
      container.clear();
    });
    setTimeout(() => {
      closeSub.unsubscribe();
      container.clear();
    }, 2000);
  }
}
