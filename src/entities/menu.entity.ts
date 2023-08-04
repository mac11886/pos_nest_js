import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('menu')
export class MenuEntity {
  @PrimaryGeneratedColumn()
  id?: string;
  @Column({ type: 'varchar', nullable: false })
  name: string;
  @Column({ type: 'integer', nullable: false })
  price: number;
  @Column({ type: 'varchar', nullable: false })
  category: string;
  @Column({ type: 'varchar', nullable: false })
  img_url: string;

  @CreateDateColumn() createOn?: Date;
  @CreateDateColumn() updateOn?: Date;
}
