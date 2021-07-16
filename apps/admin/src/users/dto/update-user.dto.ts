import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { prop } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({ example: '123', description: '用户名' })
  @prop()
  username: string;
  @ApiProperty({ example: '123', description: '密码' })
  @prop()
  password: string;
}
