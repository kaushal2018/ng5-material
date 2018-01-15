import { Injectable } from '@angular/core';

@Injectable()
export class AuthorListService {
    // authorList = [];
    authorList = ['author 1', 'author 2', 'author 3'];
    getAuthorList() {
        return this.authorList;
    }

    // resetuserModel(obj) {
    //       obj['email'] = 'email@gmail.com';
    //       obj['password'] = 'DDDD';
    //       obj['phone.landline'] = '3921389312';
    //       obj['phone.mobile'] = '3213213213';
    //       obj['userid'] = 23132;
    //       obj['username'] = 'helll';
    //       return obj;
    // }
}
