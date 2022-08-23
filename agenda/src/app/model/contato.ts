export class Contato{
    nome: string;
    email: string;
    telefone: string;
    aniversario: Date;

    constructor(){
        this.nome='';
        this.email='';
        this.telefone='';
        this.aniversario = new Date();
    }
}