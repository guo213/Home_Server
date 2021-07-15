import { Injectable } from '@nestjs/common';
import { CreateOperationRecordDto } from './dto/create-operation-record.dto';
import { UpdateOperationRecordDto } from './dto/update-operation-record.dto';

@Injectable()
export class OperationRecordsService {
  create(createOperationRecordDto: CreateOperationRecordDto) {
    return 'This action adds a new operationRecord';
  }

  findAll() {
    return `This action returns all operationRecords`;
  }

  findOne(id: number) {
    return `This action returns a #${id} operationRecord`;
  }

  update(id: number, updateOperationRecordDto: UpdateOperationRecordDto) {
    return `This action updates a #${id} operationRecord`;
  }

  remove(id: number) {
    return `This action removes a #${id} operationRecord`;
  }
}
