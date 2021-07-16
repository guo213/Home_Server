import { prop } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty({ example: '123', description: '用户名' })
  @prop()
  username: string;
  @ApiProperty({ example: '123', description: '密码' })
  @prop()
  password: string;
}
