export class Correntista {
  private nome: string;
  private cpf: string;
  private dataNasc: Date;
  private tel: number;

  constructor(nm: string, cpf: string, dn: Date, tel: number) {
    this.nome = nm;
    this.cpf = cpf;
    this.dataNasc = dn;
    this.tel = tel;
  }

  set nomeCli(nn: string) {
    this.nome = nn;
  }

  get nomeCli() {
    return this.nome;
  }

  alterarNome(nm: string) {
    this.nome = nm;
  }

  alterarCpf(cp: string) {
    if (cp.length == 11) {
      this.cpf = cp;
    } else {
      this.cpf = '';
    }
  }

  alterarAniversario(dt: Date) {
    this.dataNasc = dt;
  }

  alterarTelefone(tel: number) {
    this.tel = tel;
  }

  obterNome(): string {
    return this.nome;
  }

  obterCpf(): string {
    return this.cpf;
  }

  obterTelefone(): number {
    return this.tel;
  }
  obterAniversario(): Date {
    return this.dataNasc;
  }
}
