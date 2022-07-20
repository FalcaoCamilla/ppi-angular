import { Component, OnInit } from '@angular/core';
import { Disciplina } from './disciplina';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.css']
})
export class TurmaComponent implements OnInit {
  disciplinas: Disciplina[];
  
  constructor() {
    this.disciplinas = [
      {
        nome: 'PPI',
        docente: 'Bruno',
        ch: 120,
        periodo: 4
      },
      {
        nome: 'SO Redes',
        docente: 'Siqueira',
        ch: 200,
        periodo: 4
      },
      {
        nome: 'Autoria Web',
        docente: 'Alvaro',
        ch: 90,
        periodo: 4
      },
      {
        nome: 'POO',
        docente: 'Procopio',
        ch: 150,
        periodo: 4
      },
    ]
    
  }

  ngOnInit(): void {
  }

}
