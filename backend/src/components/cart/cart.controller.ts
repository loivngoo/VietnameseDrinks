import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('/carts')
export class CartController {
  constructor(private readonly _service: CartService) {}

  @Post()
  async createCart(@Body() body: any) {
    return this._service.create(body);
  }

  @Get('/:user_id')
  async viewCartByUserId(@Param('user_id') user_id: string) {
    return this._service.viewByUserId(user_id);
  }

  @Get()
  async retrieveCart() {
    return this._service.retrieve();
  }

  @Delete('/:id')
  async deleteCart(@Param('id') id: string) {
    return this._service.remove(id);
  }
}
