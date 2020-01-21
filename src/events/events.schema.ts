// import {
//     Entity,
//     PrimaryGeneratedColumn,
//     Column,
//     CreateDateColumn,
//     BaseEntity
//   } from "typeorm";

//   @Entity()
//   export class Event extends BaseEntity {
//     @PrimaryGeneratedColumn("uuid")
//     id: string;
//     @Column()
//     title: string;
//     @Column("text")
//     description: string;
//     @Column({ type: "boolean", default: false })
//     isPublished: boolean;
//     @CreateDateColumn()
//     createdAt: Date;
//   }
import * as mongooose from "mongoose";
export const EventSchema = new mongooose.Schema({
  title: String,
  description: String,
  isPublished: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
