import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../providers/search.service';

@Component({
  selector: 'app-http-with-promises',
  templateUrl: './http-with-promises.component.html',
  styleUrls: ['./http-with-promises.component.css'],
  providers: [ SearchService ]
})
export class HttpWithPromisesComponent implements OnInit {
  loading: boolean = false;

  constructor(public itunes: SearchService) { }

  doSearch(term: string) {
    this.loading = true;
    // this.itunes.search(term);
    this.itunes.search(term).then(() => this.loading = false);
  }

  ngOnInit() {
  }

}
