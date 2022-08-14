import { Component, OnInit } from '@angular/core';
import { Boletim } from '../model/boletim';


@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  boletim: Boletim;
  media: number;
  mensagem: string;

  constructor() {
    this.boletim = new Boletim()
    this.media = 0;
    this.mensagem = '';
  }

  ngOnInit(): void {
  }

  calcular() {
    this.media = this.boletim.calcularMedia();
    this.mensagem = `Sua media final eh: ${this.media}`
  }

}
