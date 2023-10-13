import { Module } from '@nestjs/common';
import { SensorService } from './sensor.service';
import { SensorController } from './sensor.controller';
import { MyGateway } from 'src/gateway/gateway';

@Module({
  providers: [SensorService],
  exports: [SensorService],
  controllers: [SensorController],
})
export class SensorModule {}
