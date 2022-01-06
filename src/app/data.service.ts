import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  @Input() ticker:any;
  private REST_API_SERVER = "http://api.marketstack.com/v1/";
  private accessKey = 'a8be7182526274d4ad6d90e425581291'
  private stringFirst='http://api.marketstack.com/v1/eod?access_key=a8be7182526274d4ad6d90e425581291&symbols='
  private stringLast = '&date_from=2021-01-01& date_to=2021-02-01';
  constructor(private httpClient: HttpClient) { }
  public sendGetRequestSym(data:any){
    let stringMiddle = data;
    let sendString =  this.stringFirst + stringMiddle + this.stringLast;
    return this.httpClient.get(sendString);
  }
}
