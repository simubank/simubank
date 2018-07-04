import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BranchListPage } from './branch-list';

@NgModule({
  declarations: [
    BranchListPage,
  ],
  imports: [
    IonicPageModule.forChild(BranchListPage),
  ],
})
export class BranchListPageModule {}
