import { Controller, Get } from '@nestjs/common';
import { AppService, iTrack } from './app.service';

//ENcargado de Ejecutar la Logica

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('tracks')
  getTrack(): iTrack[] {
    return this.appService.getTracks();
  }
}
