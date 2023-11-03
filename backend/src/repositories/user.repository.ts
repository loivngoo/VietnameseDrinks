import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    protected readonly _repository: Repository<UserEntity>,
  ) {}

  async getUser(id: string) {
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

  async createUser(el: any) {
    const user = this._repository.create(el);
    return this._repository.save(user);
  }

  async updateUser(el: any) {
    try {
      await this._repository.findOneOrFail({
        where: { id: el['id'], deleted: false },
      });

      await this._repository.update({ id: el['id'] }, { ...el });
      return el;
    } catch (error) {
      throw new NotFoundException({
        error: { message: error.detail || error.message } || error,
      });
    }
  }

  async getListUser(options?: any, where?: any) {
    try {
      return await this._repository.find({
        ...options,
        where: {
          deleted: !true,
          ...where,
        },
      });
    } catch (error) {
      throw new NotFoundException({
        error: { message: error.detail || error.message } || error,
      });
    }
  }

  async resetPassword(id: string, password: string) {
    const user = await this._repository.findOneByOrFail({ id });

    if (user) {
      const updatedUSer = this._repository.create({
        ...user,
        password,
      });
      return await this._repository.save(updatedUSer);
    }
    throw new Error();
  }

  async findByEmailOrPhone(el?: any) {
    const { phone, email } = el;
    return await this._repository.findOne({ where: [{ phone }, { email }] });
  }
}
