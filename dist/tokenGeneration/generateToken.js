"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRefreshToken = exports.createAccessToken = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
const createAccessToken = (id) => {
    return jsonwebtoken_1.default.sign({ id }, process.env.TOKEN_KEY, {
        expiresIn: '15m', // Access token expires in 15 minutes
    });
};
exports.createAccessToken = createAccessToken;
const createRefreshToken = (id) => {
    return jsonwebtoken_1.default.sign({ id }, process.env.REFRESH_TOKEN_KEY, {
        expiresIn: '7d', // Refresh token expires in 7 days
    });
};
exports.createRefreshToken = createRefreshToken;
