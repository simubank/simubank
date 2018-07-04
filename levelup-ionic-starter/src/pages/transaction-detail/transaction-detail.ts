import { Component } from '@angular/core'
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular'

import { TransactionProvider } from './../../providers/transaction/transaction'

/**
 * Generated class for the TransactionDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transaction-detail',
  templateUrl: 'transaction-detail.html',
})
export class TransactionDetailPage {

  public transaction:any = null
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl:AlertController, private transactionProvider:TransactionProvider) {
  }

  ngOnInit() {
    let transactionId = this.navParams.get('transactionId')

    this.transactionProvider.getTransactionForTransactionId(transactionId).subscribe(data=>{
      this.transaction = (data as any).result[0]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionDetailPage');
  }

  public updateTagsForTransaction(transaction){

    let alert = this.alertCtrl.create({
      title: 'Edit Tags',
      inputs: [
        {
          name: 'Tags',
          placeholder: this.transaction.categoryTags.join(', '),
          value: this.transaction.categoryTags.join(', ') 
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            let tags = data.Tags.split(',').map(tag=>tag.trim())
            this.transactionProvider.updateTagsForTransactionId(this.transaction.id, tags).subscribe(data=>{
              console.log('Tags updated')
              this.transactionProvider.getTransactionForTransactionId(this.transaction.id).subscribe(data=>{
                this.transaction = (data as any).result[0]
              })
            })
          }
        }
      ]
    });
    alert.present();
  }

}
