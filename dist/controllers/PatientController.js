"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Patient_1 = require("../models/Patient");
const generateToken_1 = require("../tokenGeneration/generateToken");
const bcrypt_1 = __importDefault(require("bcrypt"));
class PatientController {
    constructor() {
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                if (!email || !password) {
                    return res.status(400).json({ message: "All input is required" });
                }
                const user = yield Patient_1.Patient.findOne({ email });
                if (!user || !(yield bcrypt_1.default.compare(password, user.password))) {
                    return res.status(404).json({ message: "Invalid credentials" });
                }
                const accessToken = (0, generateToken_1.createAccessToken)(user._id);
                const refreshToken = (0, generateToken_1.createRefreshToken)(user._id);
                res.cookie("refreshToken", refreshToken, {
                    domain: process.env.FRONTEND_URL,
                    path: "/",
                    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                    secure: true,
                    httpOnly: true,
                    sameSite: "none", // Changed to lowercase
                });
                return res.status(200).json({ message: "Patient logged in", responseData: { accessToken, refreshToken } });
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(500).json({ message: error.message });
                }
                else {
                    return res.status(500).json({ message: "Unknown error" });
                }
            }
        });
        this.savePatient = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, userName, password } = req.body;
                if (!email || !userName || !password) {
                    return res.status(400).json({ message: 'All fields are required' });
                }
                const oldUser = yield Patient_1.Patient.findOne({ email });
                if (oldUser) {
                    return res.status(400).json({ message: 'User Already Exists. Please Login' });
                }
                const saltRounds = 10;
                const hashedPassword = yield bcrypt_1.default.hash(password, saltRounds);
                const newUser = new Patient_1.Patient({
                    email,
                    userName,
                    password: hashedPassword,
                });
                const user = yield newUser.save();
                const token = (0, generateToken_1.createAccessToken)(user._id);
                res.cookie('token', token, {
                    path: '/',
                    expires: new Date(Date.now() + 86400000),
                    secure: true,
                    httpOnly: true,
                    sameSite: 'none', // Ensure the sameSite option is set correctly
                });
                return res.status(200).json({ message: 'Patient logged in', responseData: { token } });
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(500).json({ message: error.message });
                }
                else {
                    return res.status(500).json({ message: 'Unknown error' });
                }
            }
        });
        this.getAllPatient = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let patient = yield Patient_1.Patient.find();
                return res.status(200).json({ message: "Patient Loaded", responseData: patient });
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(500).json({ message: error });
                }
                else {
                    return res.status(500).json({ message: "unknow error" });
                }
            }
        });
        this.updatePatient = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { email } = req.params;
                let updatedPatient = yield Patient_1.Patient.findOneAndUpdate({ email: email }, req.body, {
                    new: true,
                });
                console.log("updated patient");
                return res.status(200).json({ message: "Successfully Updated", responseData: updatedPatient });
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(500).json({ message: error.message });
                }
                else {
                    return res.status(500).json({ message: "unknow error!" });
                }
            }
        });
        this.deletePatient = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { email } = req.params;
                let deletedPatient = yield Patient_1.Patient.findOneAndDelete({ email: email });
                if (!deletedPatient) {
                    throw new Error("Email Not Found!");
                }
                return res.status(200).json({ message: "Successfully deleted", responseData: deletedPatient });
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(500).json({ message: error.message });
                }
                else {
                    return res.status(500).json({ message: "unknow error!" });
                }
            }
        });
        this.searchPatient = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { email } = req.params;
                let patient = yield Patient_1.Patient.findOne({ email: email });
                return res.status(200).json({ message: "successfully loaded...!", responseData: patient });
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(500).json({ message: error.message });
                }
                else {
                    return res.status(500).json({ message: "unknow error!" });
                }
            }
        });
    }
}
exports.default = PatientController;
