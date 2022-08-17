import { Component, OnChanges, OnInit } from '@angular/core';
import { Boletim } from '../model/boletim';


@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit{
  boletim: Boletim;
  media: number;
  mensagem: string;
  visible: boolean = true;
  changeText: boolean;

  constructor() {
    this.boletim = new Boletim()
    this.media = 0;
    this.mensagem = '';
    this.changeText = false;
  }

  ngOnInit(): void {
  }

  calcular() {
    this.visible = false;
    this.media = this.boletim.calcularMedia();
    this.mensagem = `Sua media final é ${this.media}`
  }
}
