import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect();

    const politic = await this.politic.findMany();
    if (politic.length === 0) {
      await this.politic.create({
        data: {
          temperature: '0',
          gasLevel: '0',
          luminosity: '0',
        },
      });
    }
  }
  async onModuleDestroy() {
    await this.$disconnect();
  }
}
