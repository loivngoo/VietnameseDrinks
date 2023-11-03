import { Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseEntity } from 'src/entities/base.entity';
import {
  EntitySchema,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  ObjectId,
  Repository,
} from 'typeorm';

export abstract class BaseRepository<T extends BaseEntity> {
  private readonly baseLogger = new Logger(BaseRepository.name);

  constructor(
    @InjectRepository(EntitySchema)
    protected readonly _repository: Repository<T>,
  ) {}

  async paginate(where?: FindManyOptions<T>) {
    console.log(this._repository);

    return await this._repository.find(where);
  }

  async findOne(where: FindOneOptions<T>) {
    return (await this._repository.findOne(where)) || undefined;
  }

  async findById(where: FindOptionsWhere<T> | FindOptionsWhere<T>[]) {
    return this._repository.findOneByOrFail(where);
  }

  async addOne(arg: any) {
    const el = this._repository.create(arg);
    return this._repository.save(el);
  }

  async updateOne(
    criteria:
      | string
      | number
      | FindOptionsWhere<T>
      | Date
      | ObjectId
      | string[]
      | number[]
      | Date[]
      | ObjectId[],
    partialEntity: any,
  ) {
    return this._repository.update(criteria, partialEntity);
  }
}
