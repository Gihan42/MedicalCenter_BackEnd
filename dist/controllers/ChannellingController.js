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
const Channelling_1 = require("../models/Channelling");
class ChannelingController {
    constructor() {
        this.saveChanneling = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let channel = new Channelling_1.Channelling(req.body);
                let saveChannel = yield channel.save();
                console.log("saved");
                return res.status(200).json({ message: "save channel", responseData: saveChannel });
            }
            catch (error) {
                console.log("discard");
                if (error instanceof Error) {
                    return res.status(500).json({ message: error });
                }
                else {
                    return res.status(500).json({ message: "unknow error" });
                }
            }
        });
        this.getAllChanneling = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let channel = yield Channelling_1.Channelling.find();
                return res.status(200).json({ message: " Loaded", responseData: channel });
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
        this.updateChanneling = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { appoinmentNo } = req.params;
                let updateChanneling = yield Channelling_1.Channelling.findOneAndUpdate({ appoinmentNo: appoinmentNo }, req.body, {
                    new: true,
                });
                return res.status(200).json({ message: "Successfully Updated", responseData: updateChanneling });
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
        this.deleteChanneling = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { appoinmentNo } = req.params;
                let deleteChanneling = yield Channelling_1.Channelling.findOneAndDelete({ appoinmentNo: appoinmentNo });
                if (!deleteChanneling) {
                    throw new Error("Id Not Found!");
                }
                return res.status(200).json({ message: "Successfully deleted", responseData: deleteChanneling });
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
exports.default = ChannelingController;
