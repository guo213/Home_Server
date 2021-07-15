import { prop } from '@typegoose/typegoose';

export class Device {
  @prop()
  uid: string;
  @prop()
  name: string;
  @prop()
  category: string;
  @prop()
  ofroom_id?: string;
  @prop()
  platform: string;
  @prop()
  protocol: string;
  @prop()
  change_record?: string;
}
