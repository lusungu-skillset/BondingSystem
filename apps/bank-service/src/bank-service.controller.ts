import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { Bank } from './entities/bank.entity';
import { BankService } from './bank-service.service';

@Controller('bank')
export class BankController {
  constructor(private readonly bankService: BankService) {}

  @Post()
  create(@Body() body: Partial<Bank>) {
    return this.bankService.create(body);
  }

  @Get()
  findAll() {
    return this.bankService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bankService.findOne(Number(id));
  }
}
