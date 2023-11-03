import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProfileService } from './profile.service';

@Controller('profiles')
export class ProfileController {
  constructor(private readonly _service: ProfileService) {}

  @Get('/:id')
  async getProfile(@Param('id') id: string) {
    return this._service.get(id);
  }

  @Post()
  async createProfile(@Body() body: any) {
    return this._service.create(body);
  }

  @Get()
  async retrieveProfile() {
    return this._service.retrieve();
  }
}
