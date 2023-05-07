import { Module } from '@nestjs/common';
import { ResortService } from './resort.service';

@Module({
  providers: [ResortService]
})
export class ResortModule {}
