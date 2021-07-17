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
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // Typegoose 1/3
    TypegooseModule.forRoot(process.env.DB_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      user: process.env.DB_USER,
      pass: process.env.DB_PASS,
      dbName: process.env.DB_NAME,
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
