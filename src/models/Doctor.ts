import { Document, Schema, model } from "mongoose";

interface IDoctor extends Document{
        d_Id:string;
        d_Name:string;
        position:string;
        time:string;
        contact:string;
        d_Charge:number;
};
const DoctorScheema =new Schema(

    {
        d_Id:{
            type:String,
            required:true
        },
        d_Name:{
            type:String,
            required:true
        },
        position:{
            type:String,
            required:true
        },
        time:{
            type:String,
            required:true
        },
        contact:{
            type:String,
            required:true
        },
        d_Charge:{
            type:Number,
            required:true
        }
    }
   
);
export const doctor=model<IDoctor>("Doctor",DoctorScheema)

