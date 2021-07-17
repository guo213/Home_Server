import { Module } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { DevicesController } from './devices.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { Device } from './entities/device.entity';

@Module({
  // Typegoose 2/3 -》原型以服务 3/3
  imports: [TypegooseModule.forFeature([Device])],
  controllers: [DevicesController],
  providers: [DevicesService],
})
export class DevicesModule {}
