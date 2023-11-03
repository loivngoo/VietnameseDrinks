import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';
@Entity('cart-items', { schema: 'public' })
export class CartItemEntity extends BaseEntity {
  @Column()
  cart_id: string;

  @Column()
  product_id: string;

  @Column()
  quantity: number;
}
