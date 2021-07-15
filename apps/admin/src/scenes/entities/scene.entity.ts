import { prop } from '@typegoose/typegoose';

export class Scene {
  @prop()
  uid: string;

  @prop()
  linkage_category: string;

  @prop()
  conditions: string;

  @prop()
  process: string;
}
