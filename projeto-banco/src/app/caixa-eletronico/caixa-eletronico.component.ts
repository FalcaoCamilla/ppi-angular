import { Component, OnInit } from '@angular/core';
import { Conta } from '../model/conta';
import { Correntista } from '../model/correntista';

@Component({
  selector: 'app-caixa-eletronico',
  templateUrl: './caixa-eletronico.component.html',
  styleUrls: ['./caixa-eletronico.component.css']
})
export class CaixaEletronicoComponent implements OnInit {
  conta: Conta;

  constructor() {
    let camilla = new Correntista(
      'Camilla',
      '13095121090',
      new Date(1, 6, 2003),
      84999035870
    );

    this.conta = new Conta(1, camilla)
  }

  ngOnInit(): void {
  }

  realizarDeposito(){
    
  }

}
