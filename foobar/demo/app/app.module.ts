import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BoxModule, BoxWrapperModule } from '../../components';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BoxModule,
    BoxWrapperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
