import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'

import { TransactionProvider } from './../../providers/transaction/transaction'
import { TransactionDetailPage } from './../transaction-detail/transaction-detail'

/**
 * Generated class for the TransactionListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transaction-list',
  templateUrl: 'transaction-list.html',
})
export class TransactionListPage {

  public transactions = []
  constructor(public navCtrl: NavController, public navParams: NavParams, private transactionProvider:TransactionProvider) {
  }

  ngOnInit() {
    
    let accountId = this.navParams.get('accountId')

    this.transactionProvider.getTransactionsForAccountId(accountId).subscribe(data=>{
      this.transactions = (data as any).result
    })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionListPage');
  }

  public handleTransactionClicked(transaction){
    this.navCtrl.push(TransactionDetailPage, {transactionId: transaction.id})
  }
  
}
