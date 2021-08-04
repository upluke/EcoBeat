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


export interface ColumnInterface {

      // id: string;
      columnName:string;
      orderedActions: string[];

  }

export interface ItemInterface {
    text: string;
    index: number
  }
  