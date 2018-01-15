// export class UserModel {
//     userid: number;
//     password: string;
//     username: string;
//     email: string;
//     phone: {
//         landline: string,
//         mobile: string
//     };
// }

export class UserModel {
    userid: number = 123;
    password: string = '';
    username: string = '';
    email: string = '';
    phone: PhoneModel;
}

export class PhoneModel {
    landline: string = '';
    mobile: string = '';
}
