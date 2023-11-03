import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CartEntity } from 'src/entities/cart.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CartRepository {
  constructor(
    @InjectRepository(CartEntity)
    protected readonly _repository: Repository<CartEntity>,
  ) {}

  async getCartByUserId(user_id: string) {
    try {
      return await this._repository.findOneOrFail({
        where: { user_id, deleted: !true },
      });
    } catch (error) {
      throw new NotFoundException({
        error: { message: error.detail || error.message } || error,
      });
    }
  }

  async createCart(el: any) {
    const cart = this._repository.create(el);
    return this._repository.save(cart);
  }

  async save(el: any) {
    return this._repository.save(el);
  }

  async updateCart(el: any) {
    try {
      await this._repository.findOneOrFail({
        where: { id: el['id'], deleted: !true },
      });

      await this._repository.update({ id: el['id'] }, { ...el });
      return el;
    } catch (error) {
      throw new NotFoundException({
        error: { message: error.detail || error.message } || error,
      });
    }
  }

  async retrieveCart(w?: any, o?: any) {
    return await this._repository.find({
      ...o,
      where: {
        deleted: !true,
        ...w,
      },
    });
  }

  async deleteCart(id: string) {
    return this._repository.delete({ id });
  }
}
