import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerListPage } from './customer-list';

@NgModule({
  declarations: [
    CustomerListPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerListPage),
  ],
})
export class CustomerListPageModule {}
