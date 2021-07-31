import {ObjectId} from "mongodb";

export interface ActionInterface{
    id:ObjectId;
    actionDescription:string;
    ecopoints:number;
    completed:boolean
}

export interface UserInterface{
    id:ObjectId;
    username:string;
    email:string;
    ecopoints:number
}