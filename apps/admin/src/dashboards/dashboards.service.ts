import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { CreateDashboardDto } from './dto/create-dashboard.dto';
import { UpdateDashboardDto } from './dto/update-dashboard.dto';
import { Dashboard } from './entities/dashboard.entity';

@Injectable()
export class DashboardsService {
  constructor(
    @InjectModel(Dashboard)
    private readonly dashboardModel: ReturnModelType<typeof Dashboard>,
  ) {}
  async create(createDashboardDto: CreateDashboardDto) {
    // console.log(`create dashboard:${createDashboardDto?.dashboardname}`);
    return await this.dashboardModel.create(createDashboardDto);
  }

  findAll() {
    // console.log(`fandall`);
    return this.dashboardModel.find().exec();
  }

  findOne(_id: string) {
    // console.log(`findone ${_id}`);
    return this.dashboardModel.findById(_id).exec();
  }

  update(_id: string, updateDashboardDto: UpdateDashboardDto) {
    // console.log(`update ${_id}`);
    return this.dashboardModel
      .findOneAndUpdate({ _id }, updateDashboardDto)
      .exec();
  }

  remove(_id: string) {
    // console.log(`delete ${_id}`);
    return this.dashboardModel.findOneAndDelete({ _id }).exec();
  }
}
