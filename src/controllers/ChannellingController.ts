import { Request, RequestHandler, Response } from "express";
import { Channelling } from "../models/Channelling";

export default class ChannelingController{
   

    saveChanneling:RequestHandler = async (req:Request,res:Response):Promise<Response> => {

        try {
            let channel = new Channelling (req.body);
            let saveChannel = await channel.save();
               console.log("saved")    
            return res.status(200).json({message:"save channel",responseData:saveChannel});
        } catch (error:unknown) {
               console.log("discard")
            if(error instanceof Error){
                return res.status(500).json({message:error});
            }else{
                return res.status(500).json({message:"unknow error"});
            }
        }   
      };
    getAllChanneling:RequestHandler = async (req:Request,res:Response):Promise<Response> => {

        try {
            let channel = await Channelling.find()
            return res.status(200).json({message:" Loaded",responseData:channel})

        } catch (error:unknown) {
            if(error instanceof Error){
                return res.status(500).json({message:error})
            }else{
                return res.status(500).json({message:"unknow error"})
            }
        }    };
    updateChanneling:RequestHandler = async (req:Request,res:Response):Promise<Response> => {

        try {
            let {appoinmentNo} = req.params ;
            let updateChanneling=await Channelling.findOneAndUpdate({appoinmentNo:appoinmentNo},req.body,{
                new:true,
            });
            return res.status(200).json({message:"Successfully Updated",responseData:updateChanneling});
        } catch (error:unknown) {
            if(error instanceof Error){
                return res.status(500).json({message:error.message})
            }else{
                return res.status(500).json({message:"unknow error!"})
            }
        }       };
    deleteChanneling:RequestHandler = async (req:Request,res:Response):Promise<Response> => {

        try {
            let {appoinmentNo} = req.params ;
            let deleteChanneling=await Channelling.findOneAndDelete({appoinmentNo:appoinmentNo});
            if(!deleteChanneling){
                throw new Error("Id Not Found!") 
            }
            return res.status(200).json({message:"Successfully deleted",responseData:deleteChanneling})
        } catch (error:unknown) {
            if(error instanceof Error){
                return res.status(500).json({message:error.message})
            }else{
                return res.status(500).json({message:"unknow error!"})
            }
        }   
         };

}