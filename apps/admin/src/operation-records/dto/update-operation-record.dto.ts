import { PartialType } from '@nestjs/mapped-types';
import { CreateOperationRecordDto } from './create-operation-record.dto';

export class UpdateOperationRecordDto extends PartialType(CreateOperationRecordDto) {}
