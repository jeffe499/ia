const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const contador = document.querySelector(".contador");
const voltarBtn = document.querySelector(".voltar-btn");  // Novo botão de voltar

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer."
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    // (as demais perguntas seguem aqui como no seu código original...)
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";
let tempoRestante = 10;  // 10 segundos para cada pergunta
let timer;  // Timer para o contador

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
    iniciarContador();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.classList.add("alternativa");
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa, botaoAlternativas));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada, botaoSelecionado) {
    // Adiciona uma animação ou destaque na resposta selecionada
    botaoSelecionado.style.backgroundColor = "#f8f9ff";
    botaoSelecionado.style.color = "#333";

    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;

    // Limpa o timer anterior
    clearInterval(timer);

    // Vai para a próxima pergunta
    setTimeout(mostraPergunta, 500);  // Espera 500ms para mostrar a próxima pergunta
}

function iniciarContador() {
    tempoRestante = 10;  // Resetando o tempo
    contador.textContent = `Tempo: ${tempoRestante}s`;

    timer = setInterval(() => {
        tempoRestante--;
        contador.textContent = `Tempo: ${tempoRestante}s`;

        if (tempoRestante <= 0) {
            clearInterval(timer);
            respostaSelecionada({
                texto: "Tempo esgotado!",
                afirmacao: "Não teve tempo para pensar na resposta."
            }, null);  // Simula resposta automática se o tempo acabar
        }
    }, 1000);
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";

    // Exibe o botão de voltar à primeira pergunta, caso queira recomeçar
    voltarBtn.style.display = "inline-block";
}

voltarBtn.addEventListener("click", () => {
    atual = 0;
    historiaFinal = "";
    voltaParaPerguntaInicial();
});

function voltaParaPerguntaInicial() {
    mostraPergunta();
}

mostraPergunta();
