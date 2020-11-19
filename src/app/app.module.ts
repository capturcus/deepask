import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumberGetterComponent } from './number-getter/number-getter.component';
import { QuestionShowerComponent } from './question-shower/question-shower.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberGetterComponent,
    QuestionShowerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
