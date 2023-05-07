import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Client } from './client.model';

@Injectable()
export class ClientService {
  constructor(@InjectModel(Client) private clientRepository: typeof Client) {}

  async createRole(dto: CreateClientDto) {
    const role = await this.clientRepository.create(dto);
    return role;
  }

  async getRoleByValue(value: string) {
    const role = await this.clientRepository.findOne({ where: { value } });
    return role;
  }
}
