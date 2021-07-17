import { prop } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';

export class Device {
  @ApiProperty({ example: '123', description: '用户ID' })
  @prop()
  uid: string;

  @ApiProperty({ example: '123', description: '设备名称' })
  @prop()
  name: string;

  @ApiProperty({ example: '123', description: '设备类别' })
  @prop()
  category: string;

  @ApiProperty({ example: '123', description: '所属房间' })
  @prop()
  ofroom_id?: string;

  @ApiProperty({ example: '123', description: '平台' })
  @prop()
  platform: string;

  @ApiProperty({ example: '123', description: '协议' })
  @prop()
  protocol: string;

  @ApiProperty({ example: '123', description: '变动记录' })
  @prop()
  change_record?: string;
}
