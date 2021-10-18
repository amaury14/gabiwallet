import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GmainComponent } from './gmain/gmain.component';
import { GMainRoutingModule } from './gwallet.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GMainRoutingModule
  ],
  declarations: [GmainComponent]
})
export class GWalletModule { }
