import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/database/prisma.service';
import { CreateSensorDTO } from './dto/createSensor.dto';
import { CreateMeasurementDTO } from './dto/createMeasurement.dto';
import { MyGateway } from 'src/gateway/gateway';

@Injectable()
export class SensorService {
  constructor(private readonly prismaService: PrismaService) {}

  async createSensor(data: CreateSensorDTO) {
    await this.prismaService.sensor.create({
      data: {
        ...data,
      },
    });
    return { message: 'Sensor created' };
  }

  async getAllSensors() {
    return this.prismaService.sensor.findMany({
      include: {
        measures: {
          take: 1,
          orderBy: {
            createdAt: 'desc',
          },
        },
      },
      orderBy: {
        createdAt: 'asc',
      },
    });
  }

  async measureSensor(data: CreateMeasurementDTO, id: number) {
    console.log(data, id);
    const sensor = await this.prismaService.sensor.findUnique({
      where: {
        id: +id,
      },
    });

    if (!sensor) {
      throw new Error('Sensor not found');
    }

    await this.prismaService.measure.create({
      data: {
        temperature: data.temperature,
        gasLevel: data.gasLevel,
        luminosity: data.luminosity,
        Sensor: {
          connect: {
            id: sensor.id,
          },
        },
      },
    });

    return { message: 'Measurement created' };
  }
}
