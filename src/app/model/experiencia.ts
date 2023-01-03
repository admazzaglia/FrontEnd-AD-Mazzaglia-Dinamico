export class Experiencia {
  id: number;
  nombreE: string;
  descripcionE: string;
  desdeE: number;
  hastaE: number;

  constructor(
    nombreE: string,
    descripcionE: string,
    desdeE: number,
    hastaE: number,
  ) {
    this.nombreE = nombreE;
    this.descripcionE = descripcionE;
    this.desdeE = desdeE;
    this.hastaE = hastaE;
  }
}
