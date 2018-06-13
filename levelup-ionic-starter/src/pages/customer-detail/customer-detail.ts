import { AccountProvider } from './../../providers/account/account';
import { CustomerProvider } from './../../providers/customer/customer';
import { TransactionListPage } from './../transaction-list/transaction-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/mergeMap';

/**
 * Generated class for the CustomerDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-customer-detail',
  templateUrl: 'customer-detail.html',
})
export class CustomerDetailPage {

  public customer = null
  public creditCardAaccounts = []
  public bankAaccounts = []
  // public accounts = []

  constructor(public navCtrl: NavController, public navParams: NavParams, private accountProvider: AccountProvider, private customerProvider:CustomerProvider) {
    
  }

  ngOnInit() {
    let customerId = this.navParams.get('customerId')

    this.customerProvider.getCustomerForCustomerId(customerId).mergeMap(data=>{
      this.customer = (data as any).result[0]
      return this.accountProvider.getCustomerAccountsForCustomerId(customerId)
    }).subscribe(data=>{
      
      this.bankAaccounts = (data as any).result.bankAccounts || []
      this.creditCardAaccounts = (data as any).result.creditCardAccounts || []
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountListPage');
  }


  handleAccountClicked(account){
    console.log(account)

    this.navCtrl.push(TransactionListPage, {accountId: account.id})
    
  }
}
