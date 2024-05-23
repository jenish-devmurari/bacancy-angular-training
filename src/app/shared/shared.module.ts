import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CardComponent } from './card/card.component';
import { AppHighlightDirective } from './directives/app-highlight.directive';


@NgModule({
  declarations: [
    CardComponent,
    AppHighlightDirective
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    CardComponent,
    AppHighlightDirective
  ]
})
export class SharedModule { }
