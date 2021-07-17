import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OperationRecordsService } from './operation-records.service';
import { CreateOperationRecordDto } from './dto/create-operation-record.dto';
import { UpdateOperationRecordDto } from './dto/update-operation-record.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
@Controller('operation-records')
@ApiTags('操作记录')
export class OperationRecordsController {
  constructor(
    private readonly operationRecordsService: OperationRecordsService,
  ) {}

  @Post()
  @ApiOperation({ summary: '创建操作记录' })
  create(@Body() createOperationRecordDto: CreateOperationRecordDto) {
    return this.operationRecordsService.create(createOperationRecordDto);
  }

  @Get()
  @ApiOperation({ summary: '获取所有操作记录' })
  findAll() {
    return this.operationRecordsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '获取操作记录' })
  findOne(@Param('id') id: string) {
    return this.operationRecordsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新操作记录' })
  update(
    @Param('id') id: string,
    @Body() updateOperationRecordDto: UpdateOperationRecordDto,
  ) {
    return this.operationRecordsService.update(id, updateOperationRecordDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除操作记录' })
  remove(@Param('id') id: string) {
    return this.operationRecordsService.remove(id);
  }
}
