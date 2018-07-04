import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENV } from '@app/env'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': ENV.authorization
  })
};
/*
  Generated class for the AccountProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AccountProvider {

  public creditCardAaccounts = [];
  public depositAccounts = [];
  

  constructor(public http: HttpClient) {  
  }

  getCustomerAccountsForCustomerId(customerId){
    return this.http.get(`${ENV.botsApiUrl}/customers/${customerId}/accounts`, httpOptions)
  }
}
