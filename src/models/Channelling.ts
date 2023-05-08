import { Document, Schema, model } from "mongoose";

interface IChannelling extends Document{
        appoinmentNo:number;
        userName:string;
        channeling_Date:string;
        
};
const ChannellingScheema =new Schema(

    {
        appoinmentNo:{
            type:Number,
            required:true
        },
        userName:{
            type:String,
            required:true
        },
        pchanneling_Date:{
            type:Number,
            required:true
        }
    }
   
);
export const channelling=model<IChannelling>("Channelling",ChannellingScheema)

