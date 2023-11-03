import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuEntity } from 'src/entities/menu.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MenuRepository {
  constructor(
    @InjectRepository(MenuEntity)
    protected readonly _repository: Repository<MenuEntity>,
  ) {}

  async getMenu(id: string) {
    return this._repository.findOne({ where: { id }, relations: ['products'] });
  }

  async createMenu(el: any) {
    const menu = this._repository.create(el);
    return this._repository.save(menu);
  }

  async updateMenu(el: any) {
    const menu = await this._repository.findOne({ where: { id: el['id'] } });
    if (menu) {
      return await this._repository.save(menu);
    }
    throw new Error();
  }

  async getListMenu() {
    return await this._repository.find();
  }
}
