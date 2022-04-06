import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../environments/environment'
import { Observable } from 'rxjs';
import { IssResult } from 'src/IssResult';
import { not } from '@angular/compiler/src/output/output_ast';
@Injectable({
  providedIn: 'root'
})
export class IssService {

  constructor (public signalRService: SignalRService, private http: HttpClient) { }

  start()
  {
    this.signalRService.startConnection();
    this.signalRService.addTransferChartDataListener();   
    this.startHttpRequest();
  }
  getPosition() 
  {
    return this.http.get(environment.baseUrl) 
    .subscribe(result=>result);
  }

  private startHttpRequest = () => {
    this.http.get(environment.baseUrl+'/getAll')
      .subscribe(res => {
        console.log(res);
      })
  }

  save(note: IssResult) 
  {
    return this.http.post(environment.baseUrl + 'ISS',note)
    .subscribe();
  }
}
