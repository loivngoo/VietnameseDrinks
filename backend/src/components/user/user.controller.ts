import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {
  constructor(private readonly _service: UserService) {}

  @Post()
  async createUser(@Body() body: any) {
    return this._service.createUserAndProfile(body);
  }

  @Get('/:id')
  async getUser(@Param('id') id: string) {
    return this._service.get(id);
  }

  @Get()
  async listUser() {
    return this._service.retrieve();
  }

  @Patch()
  async update(@Body() el: any) {
    return this._service.update(el);
  }

  @Patch('/reset-password')
  async resetPassword(@Body() body: any) {
    return this._service.update(body);
  }

  @Delete('/:id')
  async deletePassword(@Param('id') id: string) {
    return this._service.update({ id, deleted: true });
  }
}
