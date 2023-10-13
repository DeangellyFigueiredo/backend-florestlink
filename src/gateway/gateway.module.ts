import { Module } from '@nestjs/common';
import { MyGateway } from './gateway';
import { SensorModule } from 'src/sensor/sensor.module';

@Module({
  providers: [MyGateway],
  imports: [SensorModule],
})
export class GateWayModule {}
