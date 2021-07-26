import {Entity, Column, BaseEntity, ObjectIdColumn,ObjectID} from "typeorm"; 

@Entity()  
export class Actions extends BaseEntity {  

   @ObjectIdColumn() 
   id!: ObjectID; 
   
   @Column() 
   actionName!: string; 

   @Column() 
   actionDescription!: string; 

   // @Column() 
   // ecopoints!: number; 

   // @Column() 
   // completed!: boolean; 

}
 


 