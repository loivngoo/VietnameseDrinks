import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('/products')
export class ProductController {
  constructor(private readonly _service: ProductService) {}

  @Get('/:id')
  async get(@Param('id') id: string) {
    return this._service.get(id);
  }

  @Get()
  async retrieve() {
    return this._service.retrieve();
  }

  @Post()
  async create(@Body() body: any) {
    return this._service.create(body);
  }

  @Patch()
  async update(@Body() body: any) {
    return this._service.update(body);
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    return this._service.remove(id);
  }
}
