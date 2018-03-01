import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthorListService {

    constructor( private http: Http ) {}

    authorList = ['author 1', 'author 2', 'author 3'];
    getAuthorList() {
        return this.authorList;
    }

    public getActivities(): Observable<any> {
        return this.http.get('https://api.github.com/users/jlooper/events')
            .map(res => res.json())
    }

}
