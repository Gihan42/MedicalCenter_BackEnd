import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export const createAccessToken = (id: string): string => {
  return jwt.sign({ id }, process.env.TOKEN_KEY as string, {
    expiresIn: '15m', // Access token expires in 15 minutes
  });
};

export const createRefreshToken = (id: string): string => {
  return jwt.sign({ id }, process.env.REFRESH_TOKEN_KEY as string, {
    expiresIn: '7d', // Refresh token expires in 7 days
  });
};
