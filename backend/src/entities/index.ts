export * from './cart.entity';
export * from './menu.entity';
export * from './product.entity';
export * from './profile.entity';
export * from './receipt.entity';
export * from './user.entity';
export * from './cart-item.entity';

import { CartEntity } from './cart.entity';
import { CartItemEntity } from './cart-item.entity';
import { MenuEntity } from './menu.entity';
import { ProductEntity } from './product.entity';
import { ProfileEntity } from './profile.entity';
import { ReceiptEntity } from './receipt.entity';
import { UserEntity } from './user.entity';

export const entities = [
  CartEntity,
  CartItemEntity,
  MenuEntity,
  ProductEntity,
  ProfileEntity,
  ReceiptEntity,
  UserEntity,
];
