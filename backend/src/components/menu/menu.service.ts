import { Injectable } from '@nestjs/common';
import { ProductService } from '../product/product.service';

@Injectable()
export class MenuService {
  constructor(private readonly _productService: ProductService) {}
  async showMenu() {
    return this._productService.retrieve({ deleted: !true, is_show: true }, {});
  }

  async push(id: string) {
    return this._productService.update({ id, is_show: true });
  }

  async pop(id: string) {
    return this._productService.update({ id, is_show: false });
  }
}
