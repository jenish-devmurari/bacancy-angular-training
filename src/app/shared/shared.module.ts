import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CardComponent } from './card/card.component';
import { AppHighlightDirective } from './directives/app-highlight.directive';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    CardComponent,
    HeaderComponent,
    FooterComponent,
    AppHighlightDirective
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    CardComponent,
    HeaderComponent,
    FooterComponent,
    AppHighlightDirective
  ]
})
export class SharedModule { }
