import { PartialType } from '@nestjs/mapped-types/dist';
import { User } from '../entities/user.entity';
import { prop } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto extends PartialType(User) {
  @ApiProperty({ example: '123', description: '用户名' })
  @prop()
  username: string;
  @ApiProperty({ example: '123', description: '密码' })
  @prop()
  password: string;
}
