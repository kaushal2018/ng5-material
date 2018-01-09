import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../shared/models/user.model';
import { UserData } from '../../shared/data/user.data';
// import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-signup2',
  templateUrl: './signup2.component.html',
  styleUrls: ['./signup2.component.css']
})
export class Signup2Component extends UserData implements OnInit {
  // public user: User; // user model using user interface
  public user: UserModel; // user model using user class
  tempUser: UserModel[];
  constructor() { super(); }

  addUser(formData: any): void {
      this.tempUser = [{
        userid: formData.value.userid,
        username: formData.value.username,
        email: formData.value.email,
        phone: {
          landline: formData.value.phone.landline,
          mobile: formData.value.phone.mobile
        }
      }];
      if (formData.valid) {
        this.myUser.push(this.tempUser[0]);
      }
  }

  ngOnInit() {
    this.user = {
      userid: null,
      username: '',
      email: '',
      phone: {
        landline: '',
        mobile: ''
      }
    };
  }

}
