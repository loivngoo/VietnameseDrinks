import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { ProductEntity } from './product.entity';
import { TypeReceipt } from 'src/common/constants';

@Entity('receipts', { schema: 'public' })
export class ReceiptEntity extends BaseEntity {
  @OneToMany(() => ProductEntity, (product) => product.id)
  products?: ProductEntity[];

  @Column()
  count: number;

  @Column()
  total_price: number;

  @Column({
    type: 'enum',
    enum: TypeReceipt,
    default: TypeReceipt.Customer,
  })
  type: TypeReceipt;
}
