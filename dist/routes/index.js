"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PatientRoutes_1 = __importDefault(require("./PatientRoutes"));
const DoctorRoutes_1 = __importDefault(require("./DoctorRoutes"));
const ChannelingRoutes_1 = __importDefault(require("./ChannelingRoutes"));
const router = (0, express_1.Router)();
const baseUrl = "/api/v1/";
router.use(`${baseUrl}patient`, new PatientRoutes_1.default().getRouter());
router.use(`${baseUrl}doctor`, new DoctorRoutes_1.default().getRouter());
router.use(`${baseUrl}channeling`, new ChannelingRoutes_1.default().getRouter());
//  router.use(`${baseUrl}channelingDetails`,new ChannellingDetailsRoutes().getRouter());
exports.default = router;
