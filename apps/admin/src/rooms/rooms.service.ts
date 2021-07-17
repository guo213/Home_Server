import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './entities/room.entity';

@Injectable()
export class RoomsService {
  constructor(
    @InjectModel(Room)
    private readonly roomModel: ReturnModelType<typeof Room>,
  ) {}
  async create(createRoomDto: CreateRoomDto) {
    // console.log(`create room:${createRoomDto?.roomname}`);
    return await this.roomModel.create(createRoomDto);
  }

  findAll() {
    // console.log(`fandall`);
    return this.roomModel.find().exec();
  }

  findOne(_id: string) {
    // console.log(`findone ${_id}`);
    return this.roomModel.findById(_id).exec();
  }

  update(_id: string, updateRoomDto: UpdateRoomDto) {
    // console.log(`update ${_id}`);
    return this.roomModel.findOneAndUpdate({ _id }, updateRoomDto).exec();
  }

  remove(_id: string) {
    // console.log(`delete ${_id}`);
    return this.roomModel.findOneAndDelete({ _id }).exec();
  }
}
