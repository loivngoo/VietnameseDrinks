import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from 'src/entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductRepository {
  constructor(
    @InjectRepository(ProductEntity)
    protected readonly _repository: Repository<ProductEntity>,
  ) {}

  async retrieveProduct(where?: any, options?: any) {
    return await this._repository.find({
      ...options,
      where: {
        deleted: !true,
        ...where,
      },
    });
  }

  async getProduct(id: string) {
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

  async createProduct(el: any) {
    const user = this._repository.create(el);
    return this._repository.save(user);
  }

  async updateProduct(el: any) {
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
}
