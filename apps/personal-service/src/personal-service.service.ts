import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Personal } from './entities/personal.entity';

@Injectable()
export class PersonalService {
  constructor(
    @InjectRepository(Personal)
    private readonly personalRepo: Repository<Personal>,
  ) {}

  async create(data: Partial<Personal>) {
    const record = this.personalRepo.create(data);
    return this.personalRepo.save(record);
  }

  async findAll() {
    return this.personalRepo.find();
  }

  async findOne(id: number) {
    return this.personalRepo.findOneBy({ id });
  }
}
