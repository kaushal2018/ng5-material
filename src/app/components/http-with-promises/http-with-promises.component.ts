import { Component, OnInit } from '@angular/core';
import { SearchServicePromise } from '../../providers/search.service';

@Component({
  selector: 'app-http-with-promises',
  templateUrl: './http-with-promises.component.html',
  styleUrls: ['./http-with-promises.component.css'],
  providers: [ SearchServicePromise ]
})
export class HttpWithPromisesComponent implements OnInit {
  loading: boolean = false;

  constructor(public iTunesService: SearchServicePromise) { }

  doSearch(term: string) {
    this.loading = true;
    // this.itunes.search(term);
    this.iTunesService.search(term).then(() => this.loading = false);
  }

  ngOnInit() {
  }

}
