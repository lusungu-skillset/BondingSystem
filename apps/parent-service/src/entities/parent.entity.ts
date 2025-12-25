import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Parent {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstname!: string;

  @Column()
  surname!: string;

  @Column()
  relation!: string;

  @Column()
  phonenumber!: string;

  @Column()
  occupation!: string;

  @Column()
  homevillage!: string;
}
