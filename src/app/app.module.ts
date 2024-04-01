import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CoreModule } from './core/core.module';
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { CardComponent } from "./card/card.component";
import { CardTwoComponent } from './card-two/card-two.component';

@NgModule({
  declarations: [AppComponent, CardComponent, CardTwoComponent],
  imports: [BrowserModule, FormsModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
