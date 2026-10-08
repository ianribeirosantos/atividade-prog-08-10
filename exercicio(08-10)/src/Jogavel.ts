import Personagem from "./Personagem";
import Jogo from "./Jogo";

export default abstract class Jogavel extends Personagem{
    private nivel:number=0;

    constructor(nome:string, vitalidade:number, jogo:Jogo, nivel:number){
        super(nome, vitalidade, jogo)
        this.nivel = nivel
    }
        getnivel():number{
        return this.nivel
    }

    setnivel(nivel:number):void{
        if (nivel > 0){
        this.nivel=nivel
        }else{
            console.log ("não aceitamos vitalidade nula ou negativa!")
        }
    }
   
    aplicarGolpeNormal(adversario: Personagem): void {
        console.log('o golpe normal foi aplicado em', adversario)
    }
    aplicarGolpeEspecial(adversario: Personagem): void {
        console.log("o golpe foi aplicado em ", adversario)
    }
}