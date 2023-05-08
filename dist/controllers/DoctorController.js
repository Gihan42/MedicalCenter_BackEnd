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
Object.defineProperty(exports, "__esModule", { value: true });
const Doctor_1 = require("../models/Doctor");
class DoctorController {
    constructor() {
        this.saveDoctor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let doctor = new Doctor_1.Doctor(req.body);
                let saveDoctor = yield doctor.save();
                console.log();
                return res.status(200).json({ message: "Doctor saved", responseData: saveDoctor });
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
        this.getAllDoctor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            return res;
        });
        this.updateDoctor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            return res;
        });
        this.deleteDoctor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            return res;
        });
    }
}
exports.default = DoctorController;
