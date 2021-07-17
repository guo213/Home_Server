import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { CreateOperationRecordDto } from './dto/create-operation-record.dto';
import { UpdateOperationRecordDto } from './dto/update-operation-record.dto';
import { OperationRecord } from './entities/operation-record.entity';

@Injectable()
export class OperationRecordsService {
  constructor(
    @InjectModel(OperationRecord)
    private readonly operationRecordModel: ReturnModelType<
      typeof OperationRecord
    >,
  ) {}
  async create(createOperationRecordDto: CreateOperationRecordDto) {
    // console.log(`create room:${createRoomDto?.roomname}`);
    return await this.operationRecordModel.create(createOperationRecordDto);
  }

  findAll() {
    // console.log(`fandall`);
    return this.operationRecordModel.find().exec();
  }

  findOne(_id: string) {
    // console.log(`findone ${_id}`);
    return this.operationRecordModel.findById(_id).exec();
  }

  update(_id: string, updateOperationRecordDto: UpdateOperationRecordDto) {
    // console.log(`update ${_id}`);
    return this.operationRecordModel
      .findOneAndUpdate({ _id }, updateOperationRecordDto)
      .exec();
  }

  remove(_id: string) {
    // console.log(`delete ${_id}`);
    return this.operationRecordModel.findOneAndDelete({ _id }).exec();
  }
}
