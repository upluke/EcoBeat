import {ObjectId} from "mongodb";

export interface ActionInterface{
    id:ObjectId;
    actionDescription:string;
    ecopoints:number;
    completed:boolean
}