import { Module } from '@nestjs/common';
import { OperationRecordsService } from './operation-records.service';
import { OperationRecordsController } from './operation-records.controller';

@Module({
  controllers: [OperationRecordsController],
  providers: [OperationRecordsService]
})
export class OperationRecordsModule {}
