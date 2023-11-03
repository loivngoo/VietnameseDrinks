import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CartItemService } from './cart-item.service';

@Controller('/cart-items')
export class CartItemController {
  constructor(private readonly _service: CartItemService) {}

  @Post()
  async addProductToCart(@Body() body: any) {
    return this._service.addProductToCart(body);
  }

  @Delete('/:id')
  async removeProductFromCart() {}

  @Patch()
  async update() {
    return this._service.update();
  }

  @Get('/:id')
  async getCartItemDetail(@Param('id') id: string) {
    return this._service.getDetailById(id);
  }

  @Get()
  async getListCartItem(@Query() cart_id: string) {
    return this._service.getListCartItem(cart_id);
  }
}
