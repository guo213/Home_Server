import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OperationRecordsService } from './operation-records.service';
import { CreateOperationRecordDto } from './dto/create-operation-record.dto';
import { UpdateOperationRecordDto } from './dto/update-operation-record.dto';

@Controller('operation-records')
export class OperationRecordsController {
  constructor(private readonly operationRecordsService: OperationRecordsService) {}

  @Post()
  create(@Body() createOperationRecordDto: CreateOperationRecordDto) {
    return this.operationRecordsService.create(createOperationRecordDto);
  }

  @Get()
  findAll() {
    return this.operationRecordsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.operationRecordsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOperationRecordDto: UpdateOperationRecordDto) {
    return this.operationRecordsService.update(+id, updateOperationRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.operationRecordsService.remove(+id);
  }
}
