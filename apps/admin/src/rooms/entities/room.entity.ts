import { prop } from '@typegoose/typegoose';

export class Room {
  @prop()
  uid: string;

  @prop()
  name: string;

  @prop()
  floor: string;

  @prop()
  addr: string;
}
