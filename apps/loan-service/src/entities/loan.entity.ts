import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Loan {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  Tuition!: string;

  @Column()
  Upkeep!: string;

  @Column()
  Totalamount!: string;
}
