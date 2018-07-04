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
  Generated class for the CustomerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CustomerProvider {

  // public customers = []

  constructor(public http: HttpClient) {
  }

  getCustomers(){
    
    return this.http.get(`${ENV.botsApiUrl}/simulants`, httpOptions)
  }

  getCustomerForCustomerId(customerId){
    
    return this.http.get(`${ENV.botsApiUrl}/customers/${customerId}`, httpOptions)
  }

}
