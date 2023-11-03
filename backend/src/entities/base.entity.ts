import { nanoid } from 'nanoid';
import {
  BaseEntity as TypeOrmBaseEntity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm';

export abstract class BaseEntity extends TypeOrmBaseEntity {
  @PrimaryColumn('varchar', { default: nanoid(), unique: true })
  id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ default: false })
  deleted!: boolean;
}
