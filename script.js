import { perguntas } from './perguntas.js';
import { nome } from './aleatorio.js';

const caixaPerguntas = document.querySelector("#frase");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const btnGerar = document.querySelector("#btn-gerar");

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    // Se respondeu todas as perguntas
    if (atual >= perguntas.length) {
        caixaPerguntas.textContent = `Parabéns, ${nome}! Você concluiu sua jornada na Medicina Veterinária.`;
        caixaAlternativas.innerHTML = ""; // Limpa as alternativas
        
        // Cria o botão "Tente novamente"
        const btnReiniciar = document.createElement("button");
        btnReiniciar.textContent = "Tente novamente";
        btnReiniciar.addEventListener("click", reiniciarJornada);
        caixaAlternativas.appendChild(btnReiniciar);
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = ""; // Limpa os botões anteriores
    
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    atual++;
    mostraPergunta();
}

// Função para reiniciar o questionário
function reiniciarJornada() {
    atual = 0;
    mostraPergunta();
}

// Clique no botão inicial
btnGerar.addEventListener("click", () => {
    btnGerar.style.display = "none"; // Esconde o botão inicial
    mostraPergunta();
});
