import { Injectable } from '@angular/core';
import { Contato } from './contato';

@Injectable({
  providedIn: 'root'
})

export class AgendaService {
  private contatos: Contato[];

  constructor(){
    this.contatos = [
      {nome: 'Maria',
      telefone: '84999035870',
      email: 'milla@gmail.com',
      aniversario: new Date(2003, 1, 6)}
    ]
  }

  adicionarContato(c: Contato){
    if (c!= null){
      this.contatos.push(c);
    }
  }

  obterContatos(): Contato[]{
    return this.contatos;
  }
}
