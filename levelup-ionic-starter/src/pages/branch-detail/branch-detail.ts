import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'

import { BranchProvider } from './../../providers/branch/branch'


/**
 * Generated class for the BranchDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-branch-detail',
  templateUrl: 'branch-detail.html',
})
export class BranchDetailPage {

  public branch:any = null

  constructor(public navCtrl: NavController, public navParams: NavParams, private branchProvider:BranchProvider) {
  }

  ngOnInit() {
    let branchId = this.navParams.get('branchId')

    this.branchProvider.getBranchForBranchId(branchId).subscribe(data=>{
      this.branch = (data as any).result[0]
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BranchDetailPage');
  }

}
