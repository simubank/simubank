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
  Generated class for the BranchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BranchProvider {

  public branches = []

  constructor(public http: HttpClient) {
  }

  getBranches(){
    return this.http.get(`${ENV.botsApiUrl}/branches`, httpOptions)
  }

  getBranchForBranchId(branchId){
    return this.http.get(`${ENV.botsApiUrl}/branches/${branchId}`, httpOptions)
  }
}
