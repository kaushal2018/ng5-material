import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../shared/models/user.model';

export class UserData implements OnInit {
    public myUser: UserModel[] = [
    {
        userid: 1001,
        username: 'kaushal',
        email: 'kaushal.k@intelegencia.com',
        phone: {
            landline: '2225772928',
            mobile: '9873656549',
        }
    },
    {
        userid: 1002,
        username: 'kaushalk',
        email: 'krkaushal007@gmail.com',
        phone: {
            landline: '11111111111',
            mobile: '89898989898',
        }
    }];
    ngOnInit() {
    }
}
