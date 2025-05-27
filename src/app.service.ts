import { Injectable } from '@nestjs/common';
//Logica de Negocio de La aplicacion.

export interface iTrack{
  id: number,
  title: string,
  duration: number,
  artist: string
}

export const tracks: iTrack[] = [
  {
    id:1,
    title: "cancion 1",
    duration: 120,
    artist:"interprete 1"
  },
  {
    id:2,
    title: "cancion 2",
    duration: 130,
    artist:"interprete 2"
  },
  {
    id:3,
    title: "cancion 3",
    duration: 140,
    artist:"interprete 3"
  },
  {
    id:4,
    title: "cancion 4",
    duration: 150,
    artist:"interprete 4"
  }
]

@Injectable()
export class AppService {
  getTracks(): iTrack[] {
    return tracks;
  }
}
