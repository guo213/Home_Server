import { prop } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { OperationRecord } from '../entities/operation-record.entity';

export class CreateOperationRecordDto extends PartialType(OperationRecord) {
  @ApiProperty({ example: '123', description: '用户ID' })
  @prop()
  uid: string;

  @ApiProperty({ example: '123', description: '时间' })
  @prop()
  time: string;

  @ApiProperty({ example: '123', description: 'IP地址' })
  @prop()
  ipaddr: string;

  @ApiProperty({ example: '123', description: '操作' })
  @prop()
  operation: string;
}
