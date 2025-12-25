import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bank } from './entities/bank.entity';

@Injectable()
export class BankService {
  constructor(
    @InjectRepository(Bank)
    private readonly bankRepo: Repository<Bank>,
  ) {}

  async create(data: Partial<Bank>) {
    const record = this.bankRepo.create(data);
    return this.bankRepo.save(record);
  }

  async findAll() {
    return this.bankRepo.find();
  }

  async findOne(id: number) {
    return this.bankRepo.findOneBy({ id });
  }
}
