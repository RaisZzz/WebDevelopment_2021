import { Module } from '@nestjs/common';
import { ServiceTourService } from './service-tour.service';
import { ServiceTourController } from './service-tour.controller';

@Module({
  providers: [ServiceTourService],
  controllers: [ServiceTourController]
})
export class ServiceTourModule {}
