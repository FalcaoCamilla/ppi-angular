import { Injectable } from '@angular/core';
import { Consulta } from './consulta';

@Injectable({
  providedIn: 'root'
})
export class ClinicaService {
  private consultas: Consulta[];
  private total: number;

  constructor() {
    this.consultas = [];
    this.total = 0;
  }

  addConsulta(paciente: Consulta){
    if (paciente!= null){
      this.consultas.push(paciente)
    }
  }

  exibirConsultas(): Consulta[]{
    return this.consultas;
  }

  somarPreco(){
    for(let i=0; i < this.consultas.length; i++){
      this.total += this.consultas[i].preco;
    }
    console.log(this.total)
    return this.total;
  }

  obterTotal(){
    return this.total
  }

  setTotal(val: number){
    this.total=val
  }
}
