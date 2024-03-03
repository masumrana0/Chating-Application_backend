import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  verification_url: process.env.VERIFICATION_URL,
  email: process.env.EMAIL,
  email_password: process.env.EMAIL_PASSWORD,
  jwt: {
    token_secret: process.env.ACCESS_TOKEN_SECRET,
    refresh_token_secret: process.env.REFRESH_TOKEN_SECRET,
    token_expirein: process.env.ACCESS_TOKEN_EXPIREIN,
    refresh_token_expirein: process.env.REFRESH_TOKEN_EXPIREIN,
  },
};
