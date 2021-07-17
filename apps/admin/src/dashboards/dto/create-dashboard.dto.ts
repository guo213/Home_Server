import { PartialType } from '@nestjs/mapped-types';
import { prop } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { Dashboard } from '../entities/dashboard.entity';
export class CreateDashboardDto extends PartialType(Dashboard) {
  @ApiProperty({ example: '123', description: '用户ID' })
  @prop()
  uid: string;

  @ApiProperty({ example: '123', description: '设备ID列表' })
  @prop({ type: String })
  device_ids: string[];

  @ApiProperty({ example: '123', description: '设备样式列表' })
  @prop({ type: String })
  view_styles: string[];
}
