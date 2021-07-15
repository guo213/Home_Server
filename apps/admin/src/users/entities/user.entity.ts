import { prop } from '@typegoose/typegoose';
// import { TypegooseModule } from 'nestjs-typegoose';

export class User {
  @prop()
  username: string;
  @prop()
  password: string;
}
// export const UserDto = TypegooseModule.forFeature([User]);
