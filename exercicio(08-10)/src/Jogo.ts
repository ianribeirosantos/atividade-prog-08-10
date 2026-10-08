import Personagem from "./Personagem";

export default class Jogo{
    private dificuldade:string;
    public listaPersonagens?:Personagem[] //eu posso criar um jogo e só dpeois add personagens, ent é opcionaol

    constructor(dificuldade:string){
        this.dificuldade = dificuldade;
        this.listaPersonagens = []
    }
    getdificuldade():string{
        return this.dificuldade
    }
    setdificuldade(dificuldade:string){
        this.dificuldade = dificuldade
    }
    
}