"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.channelling = void 0;
const mongoose_1 = require("mongoose");
;
const ChannellingScheema = new mongoose_1.Schema({
    appoinmentNo: {
        type: Number,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    pchanneling_Date: {
        type: Number,
        required: true
    }
});
exports.channelling = (0, mongoose_1.model)("Channelling", ChannellingScheema);
