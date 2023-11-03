import { Controller, Get, Param, Post } from '@nestjs/common';
import { MenuService } from './menu.service';

@Controller('/menu')
export class MenuController {
  constructor(private readonly _service: MenuService) {}

  @Get()
  async showMenu() {
    return this._service.showMenu();
  }

  @Post('/pop/:id')
  async pop(@Param('id') id: string) {
    return this._service.pop(id);
  }

  @Post('/push/:id')
  async push(@Param('id') id: string) {
    return this._service.push(id);
  }
}
