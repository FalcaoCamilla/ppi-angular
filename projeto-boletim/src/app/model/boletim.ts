export class Boletim {
  private bim1: number;
  private bim2: number;
  private bim3: number;
  private bim4: number;
  constructor() {
      this.bim1 = 0;
      this.bim2 = 0;
      this.bim3 = 0;
      this.bim4 = 0;
  }

  set bimestre1(nota: number) {
      if (nota >= 0 && nota <= 100) {
          this.bim1 = nota;
      } else {
          this.bim1 = 0;
      }
  }
  get bimestre1(): number {
      return this.bim1;
  }

  set bimestre2(nota: number) {
      if (nota >= 0 && nota <= 100) {
          this.bim2 = nota;
      } else {
        this.bim2 = 0;
    }
  }
  get bimestre2(): number {
      return this.bim2;
  }

  set bimestre3(nota: number) {
      if (nota >= 0 && nota <= 100) {
          this.bim3 = nota;
      } else {
        this.bim3 = 0;
    }
  }
  get bimestre3(): number {
      return this.bim3;
  }

  set bimestre4(nota: number) {
      if (nota >= 0 && nota <= 100) {
          this.bim4 = nota;
      } else {
        this.bim4 = 0;
    }
  }
  get bimestre4(): number {
      return this.bim4;
  }

  calcularMedia() {
      return (this.bimestre1*2 + this.bimestre2*2 + this.bimestre3*3 + this.bimestre4*3)/10;
  }

}
