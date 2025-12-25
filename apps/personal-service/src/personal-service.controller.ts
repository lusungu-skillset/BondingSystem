import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { Personal } from './entities/personal.entity';
import { PersonalService } from './personal-service.service';

@Controller('personal')
export class PersonalController {
  constructor(private readonly personalService: PersonalService) {}

  
  @Post()
  create(@Body() body: Partial<Personal>) {
    return this.personalService.create(body);
  }


  @Get()
  findAll() {
    return this.personalService.findAll();
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personalService.findOne(Number(id));
  }
}
