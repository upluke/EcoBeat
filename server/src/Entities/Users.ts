import {Entity, Column, BaseEntity, ObjectIdColumn,ObjectID} from "typeorm"; 

@Entity() //entity decorator
export class Users extends BaseEntity {  

   @ObjectIdColumn() 
   id!: ObjectID; 
   
   @Column() 
   username!: string; 

   @Column() 
   email!: string; 

   @Column() 
   ecopoints!: number; 


}
 