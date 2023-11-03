import { Injectable } from '@nestjs/common';
import { ProductRepository } from 'src/repositories';

@Injectable()
export class ProductService {
  constructor(private readonly _repo: ProductRepository) {}

  async retrieve(w?: any, o?: any) {
    return this._repo.retrieveProduct(w, o);
  }

  async get(id: string) {
    return this._repo.getProduct(id);
  }

  async create(el: any) {
    return this._repo.createProduct(el);
  }

  async update(el: any) {
    return this._repo.updateProduct(el);
  }

  async remove(id: string) {
    return this._repo.updateProduct({ id, deleted: true });
  }
}
