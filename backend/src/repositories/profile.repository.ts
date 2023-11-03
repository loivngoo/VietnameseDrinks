import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfileEntity } from 'src/entities/profile.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileRepository {
  constructor(
    @InjectRepository(ProfileEntity)
    protected readonly _repository: Repository<ProfileEntity>,
  ) {}

  async retrieveProfile() {
    return await this._repository.find();
  }

  async getProfile(id: string) {
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

  async updateProfile(el: any) {
    try {
      await this._repository.findOneOrFail({
        where: { id: el['id'] },
      });
      return await this._repository.save(el);
    } catch (error) {
      throw new NotFoundException({
        error: { message: error.detail || error.message } || error,
      });
    }
  }

  async createProfile(el: any) {
    try {
      const profile = this._repository.create(el);
      await this._repository.save(profile);

      return profile;
    } catch (error) {
      throw new BadRequestException({
        error: { message: error.detail || error.message } || error,
      });
    }
  }
}
