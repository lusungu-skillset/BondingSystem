import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Bank {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  bankname!: string;

  @Column()
  branchName!: string;

  @Column()
  accountName!: string;

  @Column()
  accountNumber!: string;
}
