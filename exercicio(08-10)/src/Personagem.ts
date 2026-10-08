import Jogo from "./Jogo";

export default abstract class Personagem{
    private nome:string='';
    private vitalidade:number=0;
    private jogo:Jogo;

    constructor(nome:string, vitalidade:number, jogo:Jogo){
        this.nome = nome;
        this.vitalidade = vitalidade
        this.jogo = jogo
    }

    getnome ():string{
        return this.nome
    }
    setnome(nome:string){
        if (nome ==''){
            console.log("pode vazio nao bê")
        }else{
            this.nome = nome
        }
    }
    getvitalidade():number{
        return this.vitalidade
    }

    setvitalidade(vitalidade:number):void{
        if (vitalidade > 0){
        this.vitalidade=vitalidade
        }else{
            console.log ("não aceitamos vitalidade nula ou negativa!")
        }
    }
    getjogo():Jogo{
        return this.jogo
    }

    setjogo(jogo:Jogo):void{
        this.jogo=jogo
    }

    abstract aplicarGolpeNormal(adversario: Personagem):void; //so a assinatura
    abstract aplicarGolpeEspecial(adversario:Personagem):void;
}