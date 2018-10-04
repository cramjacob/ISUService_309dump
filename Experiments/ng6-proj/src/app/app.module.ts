import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeyupComponent } from './keyup/keyup.component';
import { ClickMeComponent } from './click-me/click-me.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyupComponent,
    ClickMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
