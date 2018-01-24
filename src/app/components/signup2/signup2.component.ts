import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../shared/models/user.model';
import { AuthorListService } from '../../providers/abc.services';
// import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-signup2',
  templateUrl: './signup2.component.html',
  styleUrls: ['./signup2.component.css']
})
export class Signup2Component implements OnInit {
  // https://toddmotto.com/angular-2-forms-template-driven
  // public user: User; // user model using user interface
  // user = new UserModel(); // user model using user class

  // tempUser: UserModel[] = [];

  // userdetails;
  // constructor(private aservice: AuthorListService) {
  //  this.userdetails =  aservice.resetuserModel(this.user);
  //  console.log(this.userdetails);
  // }
  user = [{
    userid: null,
    password: '',
    username: '',
    email: '',
    phone: {
      landline: '',
      mobile: ''
    }
  }];
  constructor() {
    // this.user = {
    //   userid: null,
    //   password: '',
    //   username: '',
    //   email: '',
    //   phone: {
    //     landline: '',
    //     mobile: ''
    //   }
    // };
  }

  addUser(formData: any): void {
    if (formData.valid) {
      this.user = [{
        userid: formData.value.userid,
        password: formData.value.password,
        username: formData.value.username,
        email: formData.value.email,
        phone: {
          landline: formData.value.phone.landline,
          mobile: formData.value.phone.mobile
        }
      }];
      console.log(this.user);
    }
  }

  // addUser(formData: any): void {
  //   if (formData.valid) {
  //     this.tempUser = [{
  //       userid: formData.value.userid,
  //       password: formData.value.password,
  //       username: formData.value.username,
  //       email: formData.value.email,
  //       phone: {
  //         landline: formData.value.phone.landline,
  //         mobile: formData.value.phone.mobile
  //       }
  //     }];
  //     console.log(this.user);
  //   }
  // }

  ngOnInit() {
    console.log(this.user);
  }

}
