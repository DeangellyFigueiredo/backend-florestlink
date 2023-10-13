import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/database/prisma.service';
import { UpdatePoliticDTO } from './dto/updatePolitic.dto';

@Injectable()
export class PoliticService {
  constructor(private readonly prismaService: PrismaService) {}

  async updatePolitic(data: UpdatePoliticDTO) {
    return await this.prismaService.politic.update({
      where: {
        id: 1,
      },
      data: {
        ...data,
      },
    });
  }

  async getPolitic() {
    return await this.prismaService.politic.findUnique({
      where: {
        id: 1,
      },
    });
  }
}
