import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Boletim } from '../model/boletim';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  media: number;
  mediaForm: FormGroup;
  mensagem: string;

  constructor(private fb: FormBuilder) {
    this.media = 0;
    this.mensagem = '';
    this.mediaForm = this.fb.group({
      bim1 : ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      bim2 : ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      bim3 : ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      bim4 : ['', [Validators.required, Validators.min(0), Validators.max(100)]],
    })
  }

  ngOnInit() {
  }

  calcular(){
    let nt = this.mediaForm.value;
    //this.boletim.bimestre1 = notas.bim1;
    //this.boletim.bimestre2 = notas.bim2;
    //this.boletim.bimestre3 = notas.bim3;
    //this.boletim.bimestre4 = notas.bim4;
    let boletim = new Boletim (nt.bim1, nt.bim2, nt.bim3, nt.bim4);
    this.media = boletim.calcularMedia();
    this.mensagem = `Sua media final é ${this.media}`
  }
}
