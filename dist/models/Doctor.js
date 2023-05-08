"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doctor = void 0;
const mongoose_1 = require("mongoose");
;
const DoctorScheema = new mongoose_1.Schema({
    d_Id: {
        type: String,
        required: true
    },
    d_Name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    d_Charge: {
        type: Number,
        required: true
    }
});
exports.doctor = (0, mongoose_1.model)("Doctor", DoctorScheema);