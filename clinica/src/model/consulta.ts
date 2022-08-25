export class Consulta{
    nomePaciente: string;
    preco: number;
    data: Date;

    constructor(){
        this.nomePaciente = '';
        this.preco = 0;
        this.data = new Date();
    }
}