import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { UsersModule } from './users/users.module';
import { OperationRecordsModule } from './operation-records/operation-records.module';
import { DevicesModule } from './devices/devices.module';
import { RoomsModule } from './rooms/rooms.module';
import { ScenesModule } from './scenes/scenes.module';
import { DashboardsModule } from './dashboards/dashboards.module';

@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost:27017/home', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }),
    UsersModule,
    OperationRecordsModule,
    DevicesModule,
    RoomsModule,
    ScenesModule,
    DashboardsModule,
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
