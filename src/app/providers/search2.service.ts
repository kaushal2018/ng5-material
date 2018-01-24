import { Injectable } from '@angular/core';
import {JsonpModule, Jsonp, Response} from '@angular/http';
import { SearchItem } from '../shared/models/search.model';

@Injectable()
export class SearchServiceObservable {
    apiRoot: string = 'https://itunes.apple.com/search';
    results: SearchItem[];
    promise;
    apiURL;

    constructor(private jsonp: Jsonp) {
    }

    search(term: string) {
        this.apiURL = `${this.apiRoot}?term=${term}&media=music&limit=100&callback=JSONP_CALLBACK`;
        return this.jsonp.request(this.apiURL)
        .map(res => {
            // console.log(res.json().results);
            return res.json().results.map(item => {
                return new SearchItem(
                    item.trackName,
                    item.artistName,
                    item.trackViewUrl,
                    item.artworkUrl30,
                    item.artistId
                );
            });
        });
    }
}
