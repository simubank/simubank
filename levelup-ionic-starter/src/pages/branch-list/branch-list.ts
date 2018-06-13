import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'

import { BranchProvider } from './../../providers/branch/branch'
import { BranchDetailPage } from './../branch-detail/branch-detail'

/**
 * Generated class for the BranchListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-branch-list',
  templateUrl: 'branch-list.html',
})
export class BranchListPage {

  branches = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private branchProvider: BranchProvider) {
    console.log(this.branches)
  }

  ngOnInit() {
    this.branches = this.branchProvider.branches
    this.branchProvider.getBranches().subscribe(data=>{
      this.branches = (data as any).result
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BranchListPage');
  }

  public handleBranchClicked(branch){
    this.navCtrl.push(BranchDetailPage, {branchId: branch.id})
  }
}
