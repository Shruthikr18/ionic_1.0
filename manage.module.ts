import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Manage } from './manage';

@NgModule({
  declarations: [
    Manage,
  ],
  imports: [
    IonicPageModule.forChild(Manage),
  ],
})
export class ManageModule {}
