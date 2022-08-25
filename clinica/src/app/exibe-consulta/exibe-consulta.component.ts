import { Component, OnInit } from '@angular/core';
import { ClinicaService } from 'src/model/clinica.service';
import { Consulta } from 'src/model/consulta';

@Component({
  selector: 'app-exibe-consulta',
  templateUrl: './exibe-consulta.component.html',
  styleUrls: ['./exibe-consulta.component.css']
})
export class ExibeConsultaComponent implements OnInit {
  consulta: Consulta[];

  constructor(public dadosConsulta: ClinicaService) {
    this.consulta = this.dadosConsulta.exibirConsultas();
  }
  ngOnInit(): void {
  }

}
