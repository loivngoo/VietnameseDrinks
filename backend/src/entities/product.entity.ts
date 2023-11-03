import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';
import { TypeProduct } from 'src/common/constants';
@Entity('products', { schema: 'public' })
export class ProductEntity extends BaseEntity {
  @Column()
  name: string;

  @Column({ default: null })
  description?: string;

  @Column({ type: 'float' })
  price: number;

  @Column({ nullable: true, default: null, type: 'float' })
  sale_price?: number;

  @Column({ default: false, nullable: true })
  event?: boolean;

  @Column({
    type: 'enum',
    enum: TypeProduct,
  })
  type: TypeProduct;

  @Column({ default: null })
  image_path: string;

  @Column({ default: false })
  is_show: boolean;
}
