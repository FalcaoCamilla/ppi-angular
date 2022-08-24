import { Component, OnInit } from '@angular/core';
import {AgendaService} from '../model/agenda.service';
import { Contato } from '../model/contato';

@Component({
  selector: 'app-add-contato',
  templateUrl: './add-contato.component.html',
  styleUrls: ['./add-contato.component.css']
})

export class AddContatoComponent implements OnInit {
  contato: Contato

  constructor(private agenda: AgendaService){
    this.contato = new Contato();
  }

  ngOnInit(): void {
  }

  adicionaContato(pessoa: Contato): void{
    this.agenda.addContato(pessoa);
    this.contato={
      nome: '',
      email: '',
      telefone: '',
      aniversario: new Date()}
}}
