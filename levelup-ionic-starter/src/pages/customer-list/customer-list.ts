import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'

import { CustomerDetailPage } from '../customer-detail/customer-detail'
import { CustomerProvider } from './../../providers/customer/customer'

/**
 * Generated class for the CustomerListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer-list',
  templateUrl: 'customer-list.html',
})
export class CustomerListPage {

  public customers = []

  constructor(public navCtrl: NavController, public navParams: NavParams, private customerProvider: CustomerProvider) {
  }

  ngOnInit() {
    this.customerProvider.getCustomers().subscribe( data =>{
      let customers = ( data as any ).result.slice(0, 100)
      this.customers = customers
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerListPage');
  }

  handleCustomerClicked(customer){
    console.log(customer)

    this.navCtrl.push(CustomerDetailPage, {customerId: customer.id})

  }
}
