import { prop } from '@typegoose/typegoose';

export class OperationRecord {
  @prop()
  uid: string;

  @prop()
  time: string;

  @prop()
  ipaddr: string;

  @prop()
  operation: string;
}
