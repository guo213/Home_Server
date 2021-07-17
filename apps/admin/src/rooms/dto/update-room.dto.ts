import { PartialType } from '@nestjs/mapped-types';
import { CreateRoomDto } from './create-room.dto';
import { ApiProperty } from '@nestjs/swagger';
import { prop } from '@typegoose/typegoose';

export class UpdateRoomDto extends PartialType(CreateRoomDto) {
  @ApiProperty({ example: '123', description: '用户ID' })
  @prop()
  uid: string;

  @ApiProperty({ example: '123', description: '房间名称' })
  @prop()
  name: string;

  @ApiProperty({ example: '123', description: '楼层' })
  @prop()
  floor: string;

  @ApiProperty({ example: '123', description: '地址' })
  @prop()
  addr: string;
}
