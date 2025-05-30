import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//ENcargado de Ejecutar la Logica

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHola(): string {
    return this.appService.getHello();
  }
}