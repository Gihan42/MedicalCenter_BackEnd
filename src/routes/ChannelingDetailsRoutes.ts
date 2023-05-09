import express, { Router } from "express";
import ChannelingDetailsController from "../controllers/ChannellingController";

export default class ChannellingDetailsRoutes{
    
  private router : Router = express.Router();
  private  controller : ChannelingDetailsController = new ChannelingDetailsController();

  // constructor(){
  //   this.configRoutes();
  // }
  
  // private configRoutes = (): void => {
  //   this.router.post("/",this.controller.saveChannelingDetails);
  //   this.router.get("/",this.controller.getAllChannelingDetails);
  //   this.router.put("/",this.controller.updateChannelingDetails);
  //   this.router.delete("/",this.controller.deleteChannelingDetails);

  // };
  // public getRouter = () : Router =>{
  //   return this.router
  // }
}