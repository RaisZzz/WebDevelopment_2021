import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { Client } from './client.model';
import { DeleteClientDto } from './dto/delete-client.dto';

@Controller('client')
export class ClientController {
  constructor(private clientService: ClientService) {}

  @Post('/create')
  create(@Body() dto: CreateClientDto): Promise<Client> {
    return this.clientService.createClient(dto);
  }

  @Get('/get')
  get(@Query() dto: DeleteClientDto): Promise<Client> {
    return this.clientService.getClientById(dto.id_client);
  }

  @Get('/get_all')
  get_all(): Promise<Client[]> {
    return this.clientService.getClients();
  }

  @Delete('/delete')
  delete(@Body() dto: DeleteClientDto): Promise<Client> {
    return this.clientService.deleteClient(dto);
  }
}
