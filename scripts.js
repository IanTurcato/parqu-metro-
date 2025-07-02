class Parquimetro {
    constructor(valorMinimo = 1) {
        this.valorMinimo = valorMinimo;
    }

    calcularTempo(valor) {
        if (valor < this.valorMinimo) {
            return { mensagem: "Valor insuficiente. Insira no mínimo R$ 1,00." };
        }

        // Regras de tempo:
        // R$1,00 = 30min
        // R$1,75 = 60min
        // R$3,00 = 120min
        let tempo = 0;
        let troco = 0;

        if (valor >= 3) {
            tempo = 120;
            troco = valor - 3;
        } else if (valor >= 1.75) {
            tempo = 60;
            troco = valor - 1.75;
        } else if (valor >= 1) {
            tempo = 30;
            troco = valor - 1;
        }

        return {
            tempo,
            troco: troco.toFixed(2),
            mensagem: `Tempo concedido: ${tempo} minutos<br>Troco: R$ ${troco.toFixed(2)}`
        };
    }

    processarPagamento() {
        const input = document.getElementById("valorInserido");
        const resultado = document.getElementById("resultado");
        const valor = parseFloat(input.value);

        const dados = this.calcularTempo(valor);

        resultado.innerHTML = dados.mensagem;
        input.value = "";
    }
}

// Criar instância global
const parquimetro = new Parquimetro();
