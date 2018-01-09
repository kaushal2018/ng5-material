export interface User {
    userid: number;
    username: string;
    email: string;
    phone?: {
      landline?: string;
      mobile?: string;
    };
  }
