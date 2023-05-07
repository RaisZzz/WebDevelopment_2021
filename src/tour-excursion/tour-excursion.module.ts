import { Module } from '@nestjs/common';
import { TourExcursionController } from './tour-excursion.controller';

@Module({
  controllers: [TourExcursionController]
})
export class TourExcursionModule {}
