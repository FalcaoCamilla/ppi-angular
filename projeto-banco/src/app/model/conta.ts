import { Correntista } from "./correntista";

export class Conta {
  private numero: number;
  private saldo: number;
  private correntista: Correntista;

  constructor(num: number, cor: Correntista) {
    this.numero = num;
    this.correntista = cor;
    this.saldo = 0;
  }

  get cliente(): Correntista {
    return this.correntista;
  }

  obterSaldo(): number {
    return this.saldo;
  }

  temSaldo(): boolean {
    return this.saldo > 0;
  }

  depositar(valor: number): boolean {
    if (valor > 0) {
      this.saldo += valor;
      return true;
    }
    return false;
  }

  debitar(valor: number): boolean {
    if (valor > 0 && this.saldo - valor >= 0) {
      this.saldo -= valor;
      return true;
    }
    return false;
  }
}
