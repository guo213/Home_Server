import { prop } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { Schema } from 'mongoose';

export class User {
  @ApiProperty({ example: '123', description: '用户名' })
  @prop()
  username: string;
  @ApiProperty({ example: '123', description: '密码' })
  @prop()
  password: string;
  @ApiProperty({ example: '123', description: '仪表板列表' })
  @prop()
  dashboards?: [{ type: Schema.Types.ObjectId; ref: 'Dashboard' }];
}
