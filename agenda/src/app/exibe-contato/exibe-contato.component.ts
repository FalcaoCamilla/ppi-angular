import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../model/agenda.service';
import { Contato } from '../model/contato';

@Component({
  selector: 'app-exibe-contato',
  templateUrl: './exibe-contato.component.html',
  styleUrls: ['./exibe-contato.component.css']
})
export class ExibeContatoComponent implements OnInit {
  contato: Contato[];

  constructor(private dadosAgenda: AgendaService) {
    this.contato = this.dadosAgenda.obterContatos()
  }

  ngOnInit(): void {

  }

}
