/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { JwtPayload } from 'jsonwebtoken';

interface IDecodedToken {
  userid: string;
  userName: string;
  role: 'normal_user' | 'admin';
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      user: JwtPayload | IDecodedToken | null;
    }
  }
}
