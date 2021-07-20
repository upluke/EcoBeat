import {Entity, Column, BaseEntity, PrimaryGeneratedColumn} from "typeorm"; 

@Entity() //entity decorator
export class Users extends BaseEntity {  

   @PrimaryGeneratedColumn() 
   id!: string; 
   
   @Column() 
   username!: string; 

   @Column() 
   ecopoints!: number; 

   @Column() 
   email!: string; 
}
 