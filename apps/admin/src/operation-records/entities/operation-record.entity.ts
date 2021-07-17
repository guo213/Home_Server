import { prop } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';

export class OperationRecord {
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
