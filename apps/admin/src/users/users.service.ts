import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private readonly userModel: ReturnModelType<typeof User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    // console.log(`create user:${createUserDto?.username}`);
    return await this.userModel.create(createUserDto);
  }

  findAll() {
    // console.log(`fandall`);
    return this.userModel.find().exec();
  }

  findOne(_id: string) {
    // console.log(`findone ${_id}`);
    return this.userModel.findById(_id).exec();
  }

  update(_id: string, updateUserDto: UpdateUserDto) {
    // console.log(`update ${_id}`);
    return this.userModel.findOneAndUpdate({ _id }, updateUserDto).exec();
  }

  remove(_id: string) {
    // console.log(`delete ${_id}`);
    return this.userModel.findOneAndDelete({ _id }).exec();
  }
}
