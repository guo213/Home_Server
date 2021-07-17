import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { Device } from './entities/device.entity';

@Injectable()
export class DevicesService {
  constructor(
    @InjectModel(Device)
    private readonly deviceModel: ReturnModelType<typeof Device>,
  ) {}
  async create(createDeviceDto: CreateDeviceDto) {
    // console.log(`create device:${createDeviceDto?.devicename}`);
    return await this.deviceModel.create(createDeviceDto);
  }

  findAll() {
    // console.log(`fandall`);
    return this.deviceModel.find().exec();
  }

  findOne(_id: string) {
    // console.log(`findone ${_id}`);
    return this.deviceModel.findById(_id).exec();
  }

  update(_id: string, updateDeviceDto: UpdateDeviceDto) {
    // console.log(`update ${_id}`);
    return this.deviceModel.findOneAndUpdate({ _id }, updateDeviceDto).exec();
  }

  remove(_id: string) {
    // console.log(`delete ${_id}`);
    return this.deviceModel.findOneAndDelete({ _id }).exec();
  }
}
