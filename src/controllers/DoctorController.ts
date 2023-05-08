import { Request, RequestHandler, Response } from "express";
import { Doctor } from "../models/Doctor";

export default class DoctorController{
    

    saveDoctor:RequestHandler = async (req:Request,res:Response):Promise<Response> => {

        try {
            let doctor= new Doctor (req.body);
            let saveDoctor=  await doctor.save();
               console.log()    
            return res.status(200).json({message:"Doctor saved",responseData:saveDoctor});
        } catch (error:unknown) {
            if(error instanceof Error){
                return res.status(500).json({message:error})
            }else{
                return res.status(500).json({message:"unknow error"})
            }
        }    };
    getAllDoctor:RequestHandler = async (req:Request,res:Response):Promise<Response> => {

        return res;
    };
    updateDoctor:RequestHandler = async (req:Request,res:Response):Promise<Response> => {

        return res;
    };
    deleteDoctor:RequestHandler = async (req:Request,res:Response):Promise<Response> => {

        return res;
    };

}