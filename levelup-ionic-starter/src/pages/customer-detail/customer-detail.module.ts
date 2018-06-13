import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerDetailPage } from './customer-detail';

@NgModule({
  declarations: [
    CustomerDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerDetailPage),
  ],
})
export class CustomerDetailPageModule {}
