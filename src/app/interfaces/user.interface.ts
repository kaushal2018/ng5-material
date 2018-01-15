export interface User {
    userid: number;
    password: string;
    username: string;
    email: string;
    phone?: {
      landline?: string;
      mobile?: string;
    };
  }
