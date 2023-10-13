import { Module } from '@nestjs/common';
import { PoliticService } from './politic.service';
import { PoliticController } from './politic.controller';

@Module({
  providers: [PoliticService],
  exports: [PoliticService],
  controllers: [PoliticController],
})
export class PoliticModule {}
