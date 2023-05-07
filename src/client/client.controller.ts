import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';

@Controller('client')
export class ClientController {
  constructor(private clientService: ClientService) {}

  @Post('/create')
  create(@Body() dto: CreateClientDto) {
    return this.clientService.createRole(dto);
  }

  @Get('/:value')
  getByValue(@Param('value') value: string) {
    return this.clientService.getRoleByValue(value);
  }
}
