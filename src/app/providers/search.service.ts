import { Injectable } from '@angular/core';
import {HttpModule, Http, URLSearchParams, Headers, RequestOptions} from '@angular/http';
import { SearchItem } from '../shared/models/search.model';

@Injectable()
export class SearchService {
    apiRoot: string = 'https://itunes.apple.com/search';
    results: SearchItem[];
    promise;
    apiURL;

    constructor(private http: Http) {
    }

    search(term: string) {
        this.promise = new Promise((resolve, reject) => {
            this.apiURL = `${this.apiRoot}?term=${term}&media=music&limit=10`;
            this.http.get(this.apiURL)
                .toPromise()
                .then(
                    res => { // Success
                        // console.log(res.json());
                        // this.results = res.json().results;
                        this.results = res.json().results.map(item => {
                            return new SearchItem(
                                item.trackName,
                                item.artistName,
                                item.trackViewUrl,
                                item.artworkUrl30,
                                item.artistId
                            );
                          });
                        resolve();
                    },
                    msg => { // Error
                        reject(msg);
                    }
                );
        });
        return this.promise;
    }
}
