export class Disciplina{
    nome: string;
    docente: string;
    ch: number;
    periodo: number;

    constructor(nm: string, doc:string, ch:number, per:number){
        this.nome = nm;
        this.docente = doc;
        this.ch = ch;
        this.periodo = per;
    }
}