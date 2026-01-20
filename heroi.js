//ultimo desafio
console.log("PROGRAMA INICIADO");

// Classe do herói
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "ataque desconhecido";
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// EXECUÇÃO (SEM ISSO, NADA APARECE)
const heroi = new Heroi("Merlin", 150, "mago");
heroi.atacar();

console.log("PROGRAMA FINALIZADO");
