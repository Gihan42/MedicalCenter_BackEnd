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
class ChannelingController {
    constructor() {
        this.saveChanneling = (req, res) => __awaiter(this, void 0, void 0, function* () {
            return res;
        });
        this.getAllChanneling = (req, res) => __awaiter(this, void 0, void 0, function* () {
            return res;
        });
        this.updateChanneling = (req, res) => __awaiter(this, void 0, void 0, function* () {
            return res;
        });
        this.deleteChanneling = (req, res) => __awaiter(this, void 0, void 0, function* () {
            return res;
        });
    }
    saveChannelingDetails(arg0, saveChannelingDetails) {
        throw new Error("Method not implemented.");
    }
    getAllChannelingDetails(arg0, getAllChannelingDetails) {
        throw new Error("Method not implemented.");
    }
    updateChannelingDetails(arg0, updateChannelingDetails) {
        throw new Error("Method not implemented.");
    }
    deleteChannelingDetails(arg0, deleteChannelingDetails) {
        throw new Error("Method not implemented.");
    }
}
exports.default = ChannelingController;
