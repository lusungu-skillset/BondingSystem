import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { Parent } from './entities/parent.entity';
import { ParentService } from './parent-service.service';

@Controller('parent')
export class ParentController {
  constructor(private readonly parentService: ParentService) {}

  @Post()
  create(@Body() body: Partial<Parent>) {
    return this.parentService.create(body);
  }

  @Get()
  findAll() {
    return this.parentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parentService.findOne(Number(id));
  }
}
