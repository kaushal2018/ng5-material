export class UserModel {
    id: number;
    username: string;
    email: string;
    phone: {
        landline: string,
        mobile: string
    };
}
