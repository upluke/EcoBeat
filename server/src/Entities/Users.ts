import {Entity, Column, BaseEntity, ObjectIdColumn} from "typeorm"; 

@Entity() //entity decorator
export class Users extends BaseEntity {  

   @ObjectIdColumn() 
   id!: string; 
   
   @Column() 
   username!: string; 

   @Column() 
   ecopoints!: number; 

   @Column() 
   email!: string; 
}
 