import { prop } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CreateSceneDto } from './create-scene.dto';

export class UpdateSceneDto extends PartialType(CreateSceneDto) {
  @ApiProperty({ example: '123', description: '用户ID' })
  @prop()
  uid: string;

  @ApiProperty({ example: '123', description: '场景名' })
  @prop()
  name: string;

  @ApiProperty({ example: '123', description: '联动类别' })
  @prop()
  linkage_category: string;

  @ApiProperty({ example: '123', description: '执行条件' })
  @prop()
  conditions: string;

  @ApiProperty({ example: '123', description: '执行流程' })
  @prop()
  process: string;
}
