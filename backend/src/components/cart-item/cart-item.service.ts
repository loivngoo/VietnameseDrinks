import { Injectable, NotFoundException } from '@nestjs/common';
import { CartItemRepository } from 'src/repositories/cart-item.repository';
import { ProductService } from '../product/product.service';
import { CartService } from '../cart/cart.service';

@Injectable()
export class CartItemService {
  constructor(
    private readonly _cartItemRepo: CartItemRepository,
    private readonly _productService: ProductService,
    private readonly _cartService: CartService,
  ) {}

  async updateQuantityInCartItem(cartItems: any[], product_id, quantity) {
    return cartItems.some(async (item) => {
      if (item['product_id'] === product_id) {
        item['quantity'] += quantity;
        await this._cartItemRepo.save(item);
        return item;
      }
    });
  }

  async updateTotalPriceInCart(cartItems: any[], cart: any) {
    let total_price = 0;
    let temp: number;
    cartItems.forEach(async (el: any) => {
      const { price } = await this._productService.get(el['product_id']);
      temp = price * el['quantity'];
      total_price += temp;
    });

    cart['total_price'] = total_price;
    return await this._cartService.save(cart);
  }

  public addProductToCart = async (el: {
    cart_id: string;
    product_id: string;
    quantity: number;
  }) => {
    const { cart_id, product_id, quantity } = el;
    try {
      const cart = await this._cartService.viewByUserId(cart_id);

      const cartItems = await this._cartItemRepo.retrieve({
        where: {
          cart_id,
        },
      });

      await this.updateQuantityInCartItem(cartItems, product_id, quantity);

      await this.updateTotalPriceInCart(cartItems, cart);
    } catch (error) {
      throw new NotFoundException({
        error: { message: error.detail || error.message } || error,
      });
    }
  };

  public removeProductFromCart = async (el) => {
    return el;
  };

  async update() {
    return 1;
  }

  async getDetailById(id: string) {
    return id;
  }

  async getListCartItem(cart_id: string) {
    return cart_id;
  }
}
