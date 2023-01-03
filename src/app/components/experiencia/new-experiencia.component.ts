import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css'],
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string;
  descripcionE: string;
  desdeE: number;
  hastaE: number;

  constructor(
    private sExperiencia: SExperienciaService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onCreate(): void {
    const expe = new Experiencia(
      this.nombreE,
      this.descripcionE,
      this.desdeE,
      this.hastaE
    );
    this.sExperiencia.save(expe).subscribe(
      (data) => {
        alert('Experiencia Añadida');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Falló Ya Existe esa Experiencia');
        this.router.navigate(['']);
      }
    );
  }
}
