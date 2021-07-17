import { Module } from '@nestjs/common';
import { OperationRecordsService } from './operation-records.service';
import { OperationRecordsController } from './operation-records.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { OperationRecord } from './entities/operation-record.entity';

@Module({
  // Typegoose 2/3 -》原型以服务 3/3
  imports: [TypegooseModule.forFeature([OperationRecord])],
  controllers: [OperationRecordsController],
  providers: [OperationRecordsService],
})
export class OperationRecordsModule {}
