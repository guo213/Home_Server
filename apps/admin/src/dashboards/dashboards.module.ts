import { Module } from '@nestjs/common';
import { DashboardsService } from './dashboards.service';
import { DashboardsController } from './dashboards.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { Dashboard } from './entities/dashboard.entity';
@Module({
  // Typegoose 2/3 -》原型以服务 3/3
  imports: [TypegooseModule.forFeature([Dashboard])],
  controllers: [DashboardsController],
  providers: [DashboardsService],
})
export class DashboardsModule {}
