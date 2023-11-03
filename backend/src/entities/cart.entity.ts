import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';
@Entity('carts', { schema: 'public' })
export class CartEntity extends BaseEntity {
  @Column()
  total_price: number;

  @Column()
  user_id: string;
}
