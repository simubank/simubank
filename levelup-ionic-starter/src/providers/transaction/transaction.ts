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
  Generated class for the TransactionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TransactionProvider {

  public transactions = []

  constructor(public http: HttpClient) {

  }

  getTransactionForTransactionId(transactionId){
    return this.http.get(`${ENV.botsApiUrl}/transactions/${transactionId}`, httpOptions)
  }
  
  getTransactionsForAccountId(accountId){
    return this.http.get(`${ENV.botsApiUrl}/accounts/${accountId}/transactions`, httpOptions)
  }
  
  updateTagsForTransactionId(transactionId, tags){
    return this.http.put(`${ENV.botsApiUrl}/transactions/${transactionId}/tags`, tags, httpOptions)
  }
}
