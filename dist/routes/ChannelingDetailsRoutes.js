"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ChannellingController_1 = __importDefault(require("../controllers/ChannellingController"));
class ChannellingDetailsRoutes {
    constructor() {
        this.router = express_1.default.Router();
        this.controller = new ChannellingController_1.default();
        this.configRoutes = () => {
            this.router.post("/", this.controller.saveChannelingDetails);
            this.router.get("/", this.controller.getAllChannelingDetails);
            this.router.put("/", this.controller.updateChannelingDetails);
            this.router.delete("/", this.controller.deleteChannelingDetails);
        };
        this.getRouter = () => {
            return this.router;
        };
        this.configRoutes();
    }
}
exports.default = ChannellingDetailsRoutes;
