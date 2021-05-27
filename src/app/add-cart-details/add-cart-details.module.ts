import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCartDetailsPageRoutingModule } from './add-cart-details-routing.module';

import { AddCartDetailsPage } from './add-cart-details.page';
import { HomePage } from '../home/home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCartDetailsPageRoutingModule
  ],
  declarations: [AddCartDetailsPage],
  providers:[HomePage]
})
export class AddCartDetailsPageModule {}
