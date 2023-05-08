import express, { Router } from "express";
import DoctorController from "../controllers/DoctorController";

export default class DoctorRoutes{
    
  private router : Router = express.Router();
  private  controller : DoctorController = new DoctorController();

  constructor(){
    this.configRoutes()
  }
  
  private configRoutes = (): void => {
    this.router.post("/r",this.controller.saveDoctor);
    this.router.get("/",this.controller.getAllDoctor);
    this.router.put("/:d_Id",this.controller.updateDoctor);
    this.router.delete("/:d_Id",this.controller.deleteDoctor);

  };
  public getRouter = () : Router =>{
    return this.router
  }
}