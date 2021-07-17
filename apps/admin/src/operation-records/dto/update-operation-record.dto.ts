import { PartialType } from '@nestjs/mapped-types';
import { CreateOperationRecordDto } from './create-operation-record.dto';
import { prop } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateOperationRecordDto extends PartialType(
  CreateOperationRecordDto,
) {
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
