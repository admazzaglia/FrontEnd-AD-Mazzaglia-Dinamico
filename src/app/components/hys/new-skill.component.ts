import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css'],
})
export class NewSkillComponent implements OnInit {
  nombre: string;
  porcentaje: number;

  constructor(
     private skillS: SkillService,
     private router: Router
  ) { }

  ngOnInit(): void {}

  onCreate(): void {
    const Skill = new skill(this.nombre, this.porcentaje);
    this.skillS.save(Skill).subscribe(
      (data) => {
        alert('Skill añadida correctamente');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Fallo Ya Existe esa Skill');
        this.router.navigate(['']);
      }
    );
  }
}
