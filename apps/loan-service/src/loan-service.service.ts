import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Loan } from './entities/loan.entity';

@Injectable()
export class LoanService {
  constructor(
    @InjectRepository(Loan)
    private readonly loanRepo: Repository<Loan>,
  ) {}

  async create(data: Partial<Loan>) {
    const record = this.loanRepo.create(data);
    return this.loanRepo.save(record);
  }

  async findAll() {
    return this.loanRepo.find();
  }

  async findOne(id: number) {
    return this.loanRepo.findOneBy({ id });
  }
}
