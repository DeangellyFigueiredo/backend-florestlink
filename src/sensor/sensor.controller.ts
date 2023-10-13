import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SensorService } from './sensor.service';
import { CreateSensorDTO } from './dto/createSensor.dto';
import { CreateMeasurementDTO } from './dto/createMeasurement.dto';

@Controller('sensor')
export class SensorController {
  constructor(private readonly sensorsService: SensorService) {}

  @Post()
  async createSensor(@Body() payload: CreateSensorDTO) {
    return this.sensorsService.createSensor(payload);
  }

  @Get()
  async getAllSensors() {
    return this.sensorsService.getAllSensors();
  }

  @Get('/:id')
  async getSensorById(@Param('id') id: number) {
    return this.sensorsService.getSensorById(id);
  }

  @Post('/measurement/:id')
  async measureSensor(
    @Param('id') id: number,
    @Body() payload: CreateMeasurementDTO,
  ) {
    console.log(payload, id);
    return this.sensorsService.measureSensor(payload, id);
  }
}
