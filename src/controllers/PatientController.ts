import { Request, RequestHandler, Response } from "express";
import { Patient } from "../models/Patient";
import { log } from "console";
import { createAccessToken,createRefreshToken} from "../tokenGeneration/generateToken"
import bcrypt from 'bcrypt';

export default class PatientController{
    login: RequestHandler = async (req: Request, res: Response): Promise<Response> => {
        try {
          const { email, password } = req.body;
          if (!email || !password) {
            return res.status(400).json({ message: "All input is required" });
          }
    
          const user = await Patient.findOne({ email });
          if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(404).json({ message: "Invalid credentials" });
          }
    
          const accessToken = createAccessToken(user._id);
          const refreshToken = createRefreshToken(user._id);
    
          res.cookie("refreshToken", refreshToken, {
            domain: process.env.FRONTEND_URL,
            path: "/",
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Cookie expires in 7 days
            secure: true,
            httpOnly: true,
            sameSite: "none", // Changed to lowercase
          });
    
          return res.status(200).json({ message: "Patient logged in", responseData: { accessToken, refreshToken } });
        } catch (error: unknown) {
          if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
          } else {
            return res.status(500).json({ message: "Unknown error" });
          }
        }
      };


      savePatient: RequestHandler = async (req: Request, res: Response): Promise<Response> => {
        try {
          const { email, userName, password } = req.body;
    
          if (!email || !userName || !password) {
            return res.status(400).json({ message: 'All fields are required' });
          }
    
          const oldUser = await Patient.findOne({ email });
          if (oldUser) {
            return res.status(400).json({ message: 'User Already Exists. Please Login' });
          }
    
          const saltRounds = 10;
          const hashedPassword = await bcrypt.hash(password, saltRounds);
    
          const newUser = new Patient({
            email,
            userName,
            password: hashedPassword,
          });
    
          const user = await newUser.save();
    
          const token = createAccessToken(user._id);
    
          res.cookie('token', token, {
            path: '/',
            expires: new Date(Date.now() + 86400000), 
            secure: true, // Cookie will only be sent over HTTPS
            httpOnly: true, // Cookie cannot be accessed via client-side scripts
            sameSite: 'none', // Ensure the sameSite option is set correctly
          });
    
          return res.status(200).json({ message: 'Patient logged in', responseData: { token } });
        } catch (error: unknown) {
          if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
          } else {
            return res.status(500).json({ message: 'Unknown error' });
          }
        }
      };
    getAllPatient:RequestHandler = async (req:Request,res:Response):Promise<Response> => {

        try {
            let patient = await Patient.find()
            return res.status(200).json({message:"Patient Loaded",responseData:patient})

        } catch (error:unknown) {
            if(error instanceof Error){
                return res.status(500).json({message:error})
            }else{
                return res.status(500).json({message:"unknow error"})
            }
        }

    };
    updatePatient:RequestHandler = async (req:Request,res:Response):Promise<Response> => {

            try {
            let {email} = req.params ;
            let updatedPatient=await Patient .findOneAndUpdate({email:email},req.body,{
                new:true,
            });
                console.log("updated patient")
            return res.status(200).json({message:"Successfully Updated",responseData:updatedPatient});
        } catch (error:unknown) {
            if(error instanceof Error){
                return res.status(500).json({message:error.message})
            }else{
                return res.status(500).json({message:"unknow error!"})
            }
        }    
    };
    deletePatient:RequestHandler = async (req:Request,res:Response):Promise<Response> => {

        try {
            let {email} = req.params ;
            let deletedPatient=await Patient.findOneAndDelete({email:email});
            if(!deletedPatient){
                throw new Error("Email Not Found!") 
            }
            return res.status(200).json({message:"Successfully deleted",responseData:deletedPatient})
        } catch (error:unknown) {
            if(error instanceof Error){
                return res.status(500).json({message:error.message})
            }else{
                return res.status(500).json({message:"unknow error!"})
            }
        }  
    };
    searchPatient:RequestHandler = async (req:Request,res:Response):Promise<Response> => {

        try {
            let {email}=req.params;
            let patient= await Patient.findOne({email:email});
            return res.status(200).json({message:"successfully loaded...!",responseData:patient})
        } catch (error:unknown) {
            if(error instanceof Error){
                return res.status(500).json({message:error.message})
            }else{
                return res.status(500).json({message:"unknow error!"})
            }
        }     
     };

}