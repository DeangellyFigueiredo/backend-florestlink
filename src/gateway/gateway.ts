import { OnModuleInit } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { SensorService } from 'src/sensor/sensor.service';
import { GatewaytSensorDTO } from './dto/gatewaySensor.dto';
import { CreateMeasurementDTO } from 'src/sensor/dto/createMeasurement.dto';
@WebSocketGateway(2026, {
  cors: {
    origin: '*',
    methods: '*',
  },
})
export class MyGateway implements OnModuleInit {
  constructor(private readonly sensorService: SensorService) {}

  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log('connected');
      console.log(socket.id);
    });
  }
  @SubscribeMessage('newMessage')
  async onNewMessage(@MessageBody() body: GatewaytSensorDTO) {
    console.log(body);
    const allSensors = await this.sensorService.getAllSensors();
    this.server.emit('onMessage', {
      message: 'New Message',
      allSensors,
    });
  }

  async onMeasurementCreated() {
    const allSensors = await this.sensorService.getAllSensors();
    this.server.emit('onMessage', {
      message: 'New Message',
      allSensors,
    });
  }
}
