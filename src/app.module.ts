import { Module } from '@nestjs/common';
import { SensorController } from './sensor/sensor.controller';
import { SensorModule } from './sensor/sensor.module';
import { RepositoryModule } from './prisma/database/prisma.module';
import { GateWayModule } from './gateway/gateway.module';
import { PoliticController } from './politic/politic.controller';
import { PoliticModule } from './politic/politic.module';

@Module({
  imports: [
    SensorModule,
    RepositoryModule,
    GateWayModule,
    PoliticModule,
    PoliticModule,
  ],
  controllers: [SensorController, PoliticController],
})
export class AppModule {}
