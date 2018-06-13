import { HttpClientModule } from '@angular/common/http'
import { ErrorHandler, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SplashScreen } from '@ionic-native/splash-screen'
import { StatusBar } from '@ionic-native/status-bar'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular'

import { TransactionListPage } from '../pages/transaction-list/transaction-list'
import { AccountProvider } from '../providers/account/account'
import { BranchProvider } from '../providers/branch/branch'
import { CustomerProvider } from '../providers/customer/customer'
import { TransactionProvider } from '../providers/transaction/transaction'
import { BranchDetailPage } from './../pages/branch-detail/branch-detail'
import { BranchListPage } from './../pages/branch-list/branch-list'
import { CustomerDetailPage } from './../pages/customer-detail/customer-detail'
import { CustomerListPage } from './../pages/customer-list/customer-list'
import { TransactionDetailPage } from './../pages/transaction-detail/transaction-detail'
import { KeysPipe } from './../pipes/KeysPipe'
import { MyApp } from './app.component'

@NgModule({
  declarations: [
    MyApp,
    TransactionListPage,
    BranchListPage,
    CustomerListPage,
    TransactionDetailPage,
    BranchDetailPage,
    KeysPipe,
    CustomerDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TransactionListPage,
    BranchListPage,
    CustomerListPage,
    TransactionDetailPage,
    BranchDetailPage,
    CustomerDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CustomerProvider,
    AccountProvider,
    TransactionProvider,
    BranchProvider
  ]
})
export class AppModule {}
