import Personagem from "./Personagem";
import Jogo from "./Jogo";

export default abstract class Jogavel extends Personagem{
    private aliado:boolean=false;

    constructor(nome:string, vitalidade:number, jogo:Jogo, aliado:boolean){
        super(nome, vitalidade, jogo)
        this.aliado = aliado
    }
        getaliado():boolean{
        return this.aliado
    }

    setnivel(aliado:boolean):void{
       this.aliado = aliado
    }
   
    aplicarGolpeNormal(adversario: Personagem): void {
        console.log('o golpe normal foi aplicado em', adversario)
    }
    aplicarGolpeEspecial(adversario: Personagem): void {
        console.log("o golpe foi aplicado em ", adversario)
    }
}