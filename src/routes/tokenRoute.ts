import express, { Request, Response } from 'express';
import jwt, { JwtPayload, VerifyErrors } from 'jsonwebtoken';
import { createAccessToken } from '../tokenGeneration/generateToken';
import cookieParser from 'cookie-parser';

const router = express.Router();
router.use(cookieParser());

interface UserPayload extends JwtPayload {
  id: string;
}

router.post('/refresh-token', (req: Request, res: Response) => {
  const token = req.cookies.refreshToken;
  if (!token) {
    return res.status(401).json({ message: 'Refresh Token Not Found' });
  }

  jwt.verify(token, process.env.REFRESH_TOKEN_KEY as string, (err: VerifyErrors | null, decoded: JwtPayload | string | undefined) => {
    if (err || !decoded) {
      return res.status(403).json({ message: 'Invalid Refresh Token' });
    }

    // Cast decoded to UserPayload if it is of type JwtPayload
    const { id } = typeof decoded === 'string' ? { id: '' } : (decoded as UserPayload);
    const accessToken = createAccessToken(id);
    res.json({ accessToken });
  });
});

export default router;
