import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BoutonPage } from './bouton';

@NgModule({
  declarations: [
    BoutonPage,
  ],
  imports: [
    IonicPageModule.forChild(BoutonPage),
  ],
})
export class BoutonPageModule {}
