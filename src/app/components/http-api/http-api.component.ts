import { Component, OnInit } from '@angular/core';
import {HttpModule, Http, URLSearchParams, Headers, RequestOptions} from '@angular/http';

@Component({
  selector: 'app-http-api',
  templateUrl: './http-api.component.html',
  styleUrls: ['./http-api.component.css']
})
export class HttpApiComponent implements OnInit {
  apiRoot: string = 'http://httpbin.org';
  constructor(private http: Http) { }
  url;
  search;
  opts: RequestOptions = new RequestOptions();
  headers: Headers = new Headers();

  doGET() {
    console.log('GET');
    this.url = `${this.apiRoot}/get`;
    this.search = new URLSearchParams();
    this.search.set('foo', 'moo');
    this.search.set('limit', 25);
    this.http.get(this.url, {search: this.search}).subscribe(res => console.log(res.json()));
  }

  doGETAsPromise() {
    console.log('GET AS PROMISE');
    this.url = `${this.apiRoot}/get`;
    this.search = new URLSearchParams();
    this.search.set('foo', 'moo');
    this.search.set('limit', 25);
    this.http.get(this.url, {search: this.search})
        .toPromise() // handle asynchronous request
        .then(res => console.log(res.json()));
  }

  doGETAsPromiseError() {
    console.log('GET AS PROMISE ERROR');
    this.url = `${this.apiRoot}/get`;
    this.search = new URLSearchParams();
    this.search.set('foo', 'moo');
    this.search.set('limit', 25);
    this.http.get(this.url, {search: this.search})
        .toPromise() // handle asynchronous request
        .then(res => console.log(res.json()))
        .catch(msg => console.error(`Error: ${msg.status} ${msg.statusText}`));
        // .then(
        //     res => console.log(res.json()),
        //     msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
        //     // we can attach callback to handle rejection of the promise inside 'then'
        // );
  }

  doGETAsObservableError() {
    console.log('GET AS OBSERVABLE ERROR');
    this.url = `${this.apiRoot}/get`;
    this.search = new URLSearchParams();
    this.search.set('foo', 'moo');
    this.search.set('limit', 25);
    this.http.get(this.url, {search: this.search})
      .subscribe(
          res => console.log(res.json()),
          msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
      );
  }

  doPOST() {
    console.log('POST');
    this.url = `${this.apiRoot}/post`;
    this.search = new URLSearchParams();
    this.search.set('foo', 'moo');
    this.search.set('limit', 25);
    this.http.post(this.url, {moo: 'foo', goo: 'loo'}, {search: this.search}).subscribe(res => console.log(res.json()));
  }

  doPUT() {
    console.log('PUT');
    this.url = `${this.apiRoot}/put`;
    this.search = new URLSearchParams();
    this.search.set('foo', 'moo');
    this.search.set('limit', 25);
    this.http.put(this.url, {moo: 'foo', goo: 'loo'}, {search: this.search}).subscribe(res => console.log(res.json()));
  }

  doDELETE() {
    console.log('DELETE');
    this.url = `${this.apiRoot}/delete`;
    this.search = new URLSearchParams();
    this.search.set('foo', 'moo');
    this.search.set('limit', 25);
    this.http.delete(this.url, {search: this.search}).subscribe(res => console.log(res.json()));
  }

  doGETWithHeaders() {
    console.log('GET WITH HEADERS');
    this.headers.append('Authorization', btoa('username:password'));

    this.search = new URLSearchParams();
    this.search.set('foo', 'moo');
    this.search.set('limit', 25);

    this.opts.headers = this.headers;
    this.opts.search = this.search;

    this.url = `${this.apiRoot}/get`;

    this.http.get(this.url, this.opts).subscribe(
        res => console.log(res.json()),
        msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
    );
  }

  ngOnInit() {
  }

}
