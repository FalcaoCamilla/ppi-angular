import { Injectable } from '@angular/core';
import { Contato } from './contato';

@Injectable({
  providedIn: 'root'
})

export class AgendaService {
  private contatos: Contato[];

  constructor(){
    this.contatos = [];
  }

  addContato(pessoa: Contato){
    if (pessoa!= null){
      this.contatos.push(pessoa);
    }
  }

  obterContatos(): Contato[]{
    return this.contatos;
  }
}
