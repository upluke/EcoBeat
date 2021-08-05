import {Entity, Column, BaseEntity, ObjectIdColumn} from "typeorm"; 
import {ObjectID} from "mongodb";

@Entity()  
export class Actions extends BaseEntity {  

   @ObjectIdColumn() 
   id!: ObjectID; 

   @Column() 
   actionDescription!: string; 

   @Column() 
   ecopoints!: number; 

   @Column() 
   completed!: boolean; 

}
 


 