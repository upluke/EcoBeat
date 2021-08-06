import { Entity, Column, BaseEntity, ObjectIdColumn } from "typeorm";
import { ObjectID } from "mongodb";

@Entity()
export class Columns extends BaseEntity {

   @ObjectIdColumn()
   id!: ObjectID;

   @Column()
   columnName!: string;

   @Column("simple-array")
   orderedActions!: string[];

}



