import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Personal {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstname!: string;

  @Column()
  surname!: string;

  @Column()
  gender!: string;

  @Column()
  phonenumber!: string;

  @Column()
  homevillage!: string;

  @Column()
  traditionalAuthority!: string;

  @Column()
  nationalID!: string;
}
