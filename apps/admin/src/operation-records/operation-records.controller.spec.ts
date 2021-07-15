import { Test, TestingModule } from '@nestjs/testing';
import { OperationRecordsController } from './operation-records.controller';
import { OperationRecordsService } from './operation-records.service';

describe('OperationRecordsController', () => {
  let controller: OperationRecordsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OperationRecordsController],
      providers: [OperationRecordsService],
    }).compile();

    controller = module.get<OperationRecordsController>(OperationRecordsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
