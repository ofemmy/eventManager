import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    BaseEntity
  } from "typeorm";
  
  @Entity()
  export class Event extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    title: string;
    @Column("text")
    description: string;
    @Column({ type: "boolean", default: false })
    isPublished: boolean;
    @CreateDateColumn()
    createdAt: Date;
  }
  