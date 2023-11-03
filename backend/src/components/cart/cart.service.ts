import { Injectable } from '@nestjs/common';
import { CartRepository } from 'src/repositories';
import { CartItemRepository } from 'src/repositories/cart-item.repository';

@Injectable()
export class CartService {
  constructor(
    private readonly _repo: CartRepository,
    private readonly _cartItemRepo: CartItemRepository,
  ) {}

  async create(el: any) {
    return this._repo.createCart(el);
  }

  async save(el: any) {
    return this._repo.updateCart(el);
  }

  async update(el: any) {
    return this._cartItemRepo.update(el);
  }

  public viewByUserId = async (id: string) => this._repo.getCartByUserId(id);

  public retrieve = async (w?: any, o?: any) => this._repo.retrieveCart(w, o);

  public remove = async (id: string) => this._repo.deleteCart(id);
}
