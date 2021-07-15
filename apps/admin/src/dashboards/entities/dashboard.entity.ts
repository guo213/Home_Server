import { prop } from '@typegoose/typegoose';

export class Dashboard {
  @prop()
  uid: string;

  @prop({ type: String })
  device_ids: string[];

  @prop({ type: String })
  view_styles: string[];
}
