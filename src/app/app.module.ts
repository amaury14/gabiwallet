import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GWalletStateHandler } from './state/api/index';
import { GWalletStateModule } from './state/state.gwallet.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GWalletModule } from './gwallet/gwallet.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    GWalletStateModule,
    HttpClientModule,
    GWalletModule
  ],
  providers: [GWalletStateHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
