import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  public showImage: boolean = false;
  @Input() public imageSource: any;

  public hide: string = "Hide";
  public show: string = "Show";


  public toggleEffect(): void {
    this.showImage = !this.showImage;
  }
}

