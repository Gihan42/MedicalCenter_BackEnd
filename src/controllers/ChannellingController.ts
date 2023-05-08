import { Request, RequestHandler, Response } from "express";

export default class ChannelingController{
    saveChannelingDetails(arg0: string, saveChannelingDetails: any) {
        throw new Error("Method not implemented.");
    }
    getAllChannelingDetails(arg0: string, getAllChannelingDetails: any) {
        throw new Error("Method not implemented.");
    }
    updateChannelingDetails(arg0: string, updateChannelingDetails: any) {
        throw new Error("Method not implemented.");
    }
    deleteChannelingDetails(arg0: string, deleteChannelingDetails: any) {
        throw new Error("Method not implemented.");
    }
    

    saveChanneling:RequestHandler = async (req:Request,res:Response):Promise<Response> => {

        return res;
    };
    getAllChanneling:RequestHandler = async (req:Request,res:Response):Promise<Response> => {

        return res;
    };
    updateChanneling:RequestHandler = async (req:Request,res:Response):Promise<Response> => {

        return res;
    };
    deleteChanneling:RequestHandler = async (req:Request,res:Response):Promise<Response> => {

        return res;
    };

}