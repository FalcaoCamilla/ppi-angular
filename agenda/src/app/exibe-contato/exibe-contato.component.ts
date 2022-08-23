import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../model/agenda.service';

@Component({
  selector: 'app-exibe-contato',
  templateUrl: './exibe-contato.component.html',
  styleUrls: ['./exibe-contato.component.css']
})
export class ExibeContatoComponent implements OnInit {

  constructor(private ag: AgendaService) { }

  ngOnInit(): void {
    console.log(this.ag.obterContatos())
  }

}
