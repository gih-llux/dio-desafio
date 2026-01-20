console.log("=== SISTEMA SIMPLES DE BATALHA ===");

// Classe do herói
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.vida = 100;
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

        console.log(`o ${this.tipo} ${this.nome} atacou usando ${ataque}`);
        return 20; // dano fixo simples
    }
}

// Sistema simples de batalha
function batalha(heroi1, heroi2) {
    console.log("\n=== BATALHA INICIADA ===\n");

    while (heroi1.vida > 0 && heroi2.vida > 0) {
        heroi2.vida -= heroi1.atacar();
        console.log(`${heroi2.nome} agora tem ${heroi2.vida} de vida\n`);
        if (heroi2.vida <= 0) break;

        heroi1.vida -= heroi2.atacar();
        console.log(`${heroi1.nome} agora tem ${heroi1.vida} de vida\n`);
    }

    const vencedor = heroi1.vida > 0 ? heroi1.nome : heroi2.nome;
    console.log(`=== ${vencedor} VENCEU A BATALHA! ===`);
}

// Seleção de dois heróis
const heroiA = new Heroi("Matias", 150, "mago");
const heroiB = new Heroi("juca", 30, "guerreiro");

// Iniciando a batalha
batalha(heroiA, heroiB);
