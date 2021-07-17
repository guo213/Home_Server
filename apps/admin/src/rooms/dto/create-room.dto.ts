import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { prop } from '@typegoose/typegoose';
import { Room } from '../entities/room.entity';
export class CreateRoomDto extends PartialType(Room) {
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
