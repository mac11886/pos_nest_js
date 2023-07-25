import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('table')
export class TableEntity {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column({ type: 'varchar', nullable: false })
  size: string;

  @Column({ type: 'boolean', nullable: false })
  status: string;
  @Column({ type: 'varchar', nullable: false })
  type: string;

  @CreateDateColumn() createOn?: Date;
  @CreateDateColumn() updateOn?: Date;
}
