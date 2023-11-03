import { UserController } from './user/user.controller';
import { MenuController } from './menu/menu.controller';
import { ProfileController } from './profile/profile.controller';
import { ProductController } from './product/product.controller';
import { CartController } from './cart/cart.controller';
import { CartItemController } from './cart-item/cart-item.controller';

import { UserService } from './user/user.service';
import { MenuService } from './menu/menu.service';
import { ProfileService } from './profile/profile.service';
import { ProductService } from './product/product.service';
import { CartService } from './cart/cart.service';
import { CartItemService } from './cart-item/cart-item.service';

export const services = [
  UserService,
  MenuService,
  ProfileService,
  ProductService,
  CartService,
  CartItemService,
];

export const controllers = [
  UserController,
  MenuController,
  ProfileController,
  ProductController,
  CartController,
  CartItemController,
];
