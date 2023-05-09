import { Request, RequestHandler, Response } from "express";
import { Doctor } from "../models/Doctor";

export default class DoctorController{
    

    saveDoctor:RequestHandler = async (req:Request,res:Response):Promise<Response> => {
                console.log("doctor")
        try {
            let doctor = new Doctor (req.body);
            let saveDoctor =  await doctor.save();
               console.log("saved")    
            return res.status(200).json({message:"Doctor saved",responseData:saveDoctor});
        } catch (error:unknown) {
               console.log("discard")
            if(error instanceof Error){
                return res.status(500).json({message:error})
            }else{
                return res.status(500).json({message:"unknow error"})
            }
        } 
      
       };
    getAllDoctor:RequestHandler = async (req:Request,res:Response):Promise<Response> => {

        try {
            let doctor = await Doctor.find()
            return res.status(200).json({message:"Doctors` Loaded",responseData:doctor})

        } catch (error:unknown) {
            if(error instanceof Error){
                return res.status(500).json({message:error})
            }else{
                return res.status(500).json({message:"unknow error"})
            }
        }
    };
    updateDoctor:RequestHandler = async (req:Request,res:Response):Promise<Response> => {

        try {
            let {DId} = req.params ;
            let updatedDoctor=await Doctor.findOneAndUpdate({DId:DId},req.body,{
                new:true,
            });
            return res.status(200).json({message:"Successfully Updated",responseData:updatedDoctor});
        } catch (error:unknown) {
            if(error instanceof Error){
                return res.status(500).json({message:error.message})
            }else{
                return res.status(500).json({message:"unknow error!"})
            }
        }     
       };
    deleteDoctor:RequestHandler = async (req:Request,res:Response):Promise<Response> => {

        try {
            let {DId} = req.params ;
            let deletedDoctor=await Doctor.findOneAndDelete({DId:DId});
            if(!deletedDoctor){
                throw new Error("Id Not Found!") 
            }
            return res.status(200).json({message:"Successfully deleted",responseData:deletedDoctor})
        } catch (error:unknown) {
            if(error instanceof Error){
                return res.status(500).json({message:error.message})
            }else{
                return res.status(500).json({message:"unknow error!"})
            }
        }      };

}