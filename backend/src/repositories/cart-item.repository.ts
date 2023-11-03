import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CartItemEntity } from 'src/entities/cart-item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CartItemRepository {
  constructor(
    @InjectRepository(CartItemEntity)
    protected readonly _repository: Repository<CartItemEntity>,
  ) {}

  async view(id: string) {
    try {
      return await this._repository.findOneOrFail({
        where: { id, deleted: !true },
      });
    } catch (error) {
      throw new NotFoundException({
        error: { message: error.detail || error.message } || error,
      });
    }
  }

  async insert(el: any) {
    const cart = this._repository.create(el);
    return this._repository.save(cart);
  }

  async save(el: any) {
    return this._repository.save(el);
  }

  async update(el: any) {
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

  async retrieve(options?: any) {
    return await this._repository.find({ ...options });
  }
}
