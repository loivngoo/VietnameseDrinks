import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReceiptEntity } from 'src/entities/receipt.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReceiptRepository {
  constructor(
    @InjectRepository(ReceiptEntity)
    protected readonly _repository: Repository<ReceiptEntity>,
  ) {}

  async getReceipt(id: string) {
    return this._repository.findOne({ where: { id }, relations: ['products'] });
  }

  async createReceipt(el: any) {
    const Receipt = this._repository.create(el);
    return this._repository.save(Receipt);
  }

  async updateReceipt(el: any) {
    const Receipt = await this._repository.findOne({ where: { id: el['id'] } });
    if (Receipt) {
      return await this._repository.save(Receipt);
    }
    throw new Error();
  }

  async getListReceipt() {
    return await this._repository.find();
  }
}
