import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { CreateSceneDto } from './dto/create-scene.dto';
import { UpdateSceneDto } from './dto/update-scene.dto';
import { Scene } from './entities/scene.entity';

@Injectable()
export class ScenesService {
  constructor(
    @InjectModel(Scene)
    private readonly sceneModel: ReturnModelType<typeof Scene>,
  ) {}
  async create(createSceneDto: CreateSceneDto) {
    // console.log(`create Scene:${createSceneDto?.Scenename}`);
    return await this.sceneModel.create(createSceneDto);
  }

  findAll() {
    // console.log(`fandall`);
    return this.sceneModel.find().exec();
  }

  findOne(_id: string) {
    // console.log(`findone ${_id}`);
    return this.sceneModel.findById(_id).exec();
  }

  update(_id: string, updateSceneDto: UpdateSceneDto) {
    // console.log(`update ${_id}`);
    return this.sceneModel.findOneAndUpdate({ _id }, updateSceneDto).exec();
  }

  remove(_id: string) {
    // console.log(`delete ${_id}`);
    return this.sceneModel.findOneAndDelete({ _id }).exec();
  }
}
