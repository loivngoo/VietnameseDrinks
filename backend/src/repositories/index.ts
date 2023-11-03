export * from './cart.repository';
export * from './menu.repository';
export * from './product.repository';
export * from './profile.repository';
export * from './receipt.repository';
export * from './user.repository';

import { CartRepository } from './cart.repository';
import { CartItemRepository } from './cart-item.repository';
import { MenuRepository } from './menu.repository';
import { ProductRepository } from './product.repository';
import { ProfileRepository } from './profile.repository';
import { ReceiptRepository } from './receipt.repository';
import { UserRepository } from './user.repository';

export const repositories = [
  CartRepository,
  CartItemRepository,
  MenuRepository,
  ProductRepository,
  ProfileRepository,
  ReceiptRepository,
  UserRepository,
];
