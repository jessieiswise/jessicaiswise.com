import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class UtilsService {

  constructor(private http: Http) { }

  put(data, key) {
    window.localStorage.setItem(key, JSON.stringify(data))
  }
  get(key) {
    let response = window.localStorage.getItem(key)
    if (response) {
      return response
    }
  }
  patch(key, data) {
    let dat = window.localStorage.getItem(key)
    if (dat) {
      for (let data_key in data) {
        if (dat[data_key]) {
          dat[data_key] = data_key
        }
      }
    }
  }
  makeGetRequest(endpoint): Observable<any> {
    console.log('test')
    let headers_ = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions(
      { headers: headers_ });

    return this.http.get(endpoint, options)
       .map(this.extractData)
  }
  extractData(res: Response) {
    let body = res.json();
    return body;
  }

}
