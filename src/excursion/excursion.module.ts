import { Module } from '@nestjs/common';
import { ExcursionService } from './excursion.service';

@Module({
  providers: [ExcursionService]
})
export class ExcursionModule {}
