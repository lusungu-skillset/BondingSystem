import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Parent } from './entities/parent.entity';

@Injectable()
export class ParentService {
  constructor(
    @InjectRepository(Parent)
    private readonly parentRepo: Repository<Parent>,
  ) {}

  async create(data: Partial<Parent>) {
    const record = this.parentRepo.create(data);
    return this.parentRepo.save(record);
  }

  async findAll() {
    return this.parentRepo.find();
  }

  async findOne(id: number) {
    return this.parentRepo.findOneBy({ id });
  }
}
