import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Register {
  @PrimaryColumn()
  RegNumber!: string;

  @Column()
  firstname!: string;

  @Column()
  surname!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at!: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at!: Date;
  id: any;
}
