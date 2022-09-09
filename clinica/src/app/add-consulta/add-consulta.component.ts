import { Component, OnInit } from '@angular/core';
import { ClinicaService } from 'src/model/clinica.service';
import { Consulta } from 'src/model/consulta';

@Component({
  selector: 'app-add-consulta',
  templateUrl: './add-consulta.component.html',
  styleUrls: ['./add-consulta.component.css']
})
export class AddConsultaComponent implements OnInit {
  consulta: Consulta;

  constructor(private c: ClinicaService) {
    this.consulta = new Consulta();
  }

  ngOnInit(): void {
  }

  adicionaConsulta(): void{
    let nc = new Consulta();
    nc.nomePaciente = this.consulta.nomePaciente;
    nc.preco = this.consulta.preco;
    nc.data = this.consulta.data;
    this.c.addConsulta(nc);
    this.c.setTotal(0);
    this.c.somarPreco();
}}
