import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BranchDetailPage } from './branch-detail';

@NgModule({
  declarations: [
    BranchDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(BranchDetailPage),
  ],
})
export class BranchDetailPageModule {}
