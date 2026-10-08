import Personagem from "./Personagem";

export default interface Controle{
    botaoA(personagem:Personagem):void;
    botaoB(personagem:Personagem):void;
}