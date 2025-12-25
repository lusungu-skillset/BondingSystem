import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { Loan } from './entities/loan.entity';
import { LoanService } from './loan-service.service';

@Controller('loan')
export class LoanController {
  constructor(private readonly loanService: LoanService) {}

  @Post()
  create(@Body() body: Partial<Loan>) {
    return this.loanService.create(body);
  }

  @Get()
  findAll() {
    return this.loanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loanService.findOne(Number(id));
  }
}
