import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('menu', { schema: 'public' })
export class MenuEntity extends BaseEntity {
  @Column()
  product_id: string;

  @Column()
  is_main: boolean;

  @Column()
  count: number;
}
