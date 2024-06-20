"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateToken_1 = require("../tokenGeneration/generateToken");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const router = express_1.default.Router();
router.use((0, cookie_parser_1.default)());
router.post('/refresh-token', (req, res) => {
    const token = req.cookies.refreshToken;
    if (!token) {
        return res.status(401).json({ message: 'Refresh Token Not Found' });
    }
    jsonwebtoken_1.default.verify(token, process.env.REFRESH_TOKEN_KEY, (err, decoded) => {
        if (err || !decoded) {
            return res.status(403).json({ message: 'Invalid Refresh Token' });
        }
        // Cast decoded to UserPayload if it is of type JwtPayload
        const { id } = typeof decoded === 'string' ? { id: '' } : decoded;
        const accessToken = (0, generateToken_1.createAccessToken)(id);
        res.json({ accessToken });
    });
});
exports.default = router;
