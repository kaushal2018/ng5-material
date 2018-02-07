import { Component, OnInit } from '@angular/core';
import { SearchServiceObservable } from '../../providers/search2.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import { SearchItem } from '../../shared/models/search.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-http-with-observables',
  templateUrl: './http-with-observables.component.html',
  styleUrls: ['./http-with-observables.component.css'],
  providers: [ SearchServiceObservable ]
})
export class HttpWithObservablesComponent implements OnInit {
  private loading: boolean = false;
  private results: Observable<SearchItem[]>;
  private searchField: FormControl;

  constructor(private itunes: SearchServiceObservable) { }

  ngOnInit() {
    this.searchField = new FormControl();
    this.results = this.searchField.valueChanges
        .debounceTime(400)
        .distinctUntilChanged()
        .do(_ => this.loading = true)
        .switchMap(term => this.itunes.search(term))
        .do(_ => this.loading = false);
  }
}