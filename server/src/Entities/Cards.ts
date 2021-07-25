import {Entity, Column, BaseEntity, ObjectIdColumn,ObjectID} from "typeorm"; 

@Entity()  
export class Cards extends BaseEntity {  

   @ObjectIdColumn() 
   id!: ObjectID; 
   
   @Column() 
   cardName!: string; 

   @Column() 
   cardDescription!: string; 

   @Column() 
   ecopoints!: number; 

   @Column() 
   completed!: boolean; 

}
 


 