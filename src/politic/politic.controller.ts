import { Body, Controller, Get, Put } from '@nestjs/common';
import { PoliticService } from './politic.service';
import { UpdatePoliticDTO } from './dto/updatePolitic.dto';

@Controller('politic')
export class PoliticController {
  constructor(private readonly politicService: PoliticService) {}

  @Put()
  async updatePolitic(@Body() data: UpdatePoliticDTO) {
    return await this.politicService.updatePolitic(data);
  }

  @Get()
  async getPolitic() {
    return await this.politicService.getPolitic();
  }
}
