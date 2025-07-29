const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

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
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa, como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendo a importância de proteger os trabalhadores.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final."
            }
        ]
    },
    // Mais perguntas sobre a ética da IA
    {
        enunciado: "Você descobre que a IA foi usada para criar um sistema de recomendação que manipula as escolhas de compra dos consumidores para maximizar lucros. O que você faz?",
        alternativas: [
            {
                texto: "Acredito que a IA deve ser usada para gerar lucro e melhorar o mercado.",
                afirmacao: "Você pode se beneficiar com sistemas que maximizam lucros, mas começa a se preocupar com os impactos negativos nas decisões de consumo."
            },
            {
                texto: "A IA deveria ser regulamentada para evitar manipulação excessiva e prejuízo para os consumidores.",
                afirmacao: "Você começa a defender uma regulamentação mais rígida sobre o uso de IA, para garantir a ética nas decisões automatizadas."
            }
        ]
    },
    {
        enunciado: "Uma IA pode diagnosticar doenças com uma precisão maior do que os médicos. Se você tivesse que confiar em um diagnóstico, você escolheria a IA ou um médico?",
        alternativas: [
            {
                texto: "Eu confiaria na IA sem hesitar, pois ela é mais precisa e rápida.",
                afirmacao: "Você acredita que a IA pode substituir completamente os médicos em algumas áreas da medicina."
            },
            {
                texto: "Eu preferiria que um médico, mesmo que menos preciso, tomasse a decisão, pois ele tem experiência humana e empatia.",
                afirmacao: "Você considera que a decisão humana ainda é mais importante em áreas sensíveis como a saúde."
            }
        ]
    },
    {
        enunciado: "Com o avanço da IA, muitas tarefas repetitivas têm sido automatizadas. Em algumas indústrias, isso causou a perda de milhares de empregos. O que você acha?",
        alternativas: [
            {
                texto: "A IA deve ser liberada para criar mais eficiência, mesmo que cause desemprego.",
                afirmacao: "Você vê o desemprego como um efeito inevitável e acredita que a IA pode gerar novos tipos de trabalho no futuro."
            },
            {
                texto: "A automação precisa ser feita de forma controlada, garantindo a requalificação profissional das pessoas afetadas.",
                afirmacao: "Você acredita que a sociedade deve se preparar para a automação, implementando programas de requalificação e apoio aos trabalhadores afetados."
            }
        ]
    },
    {
        enunciado: "Um novo tipo de IA está sendo desenvolvido para predizer comportamentos humanos. Isso inclui a previsão de suas ações antes de elas acontecerem. Você acha que isso é uma boa ideia?",
        alternativas: [
            {
                texto: "Sim, isso poderia ajudar a prevenir crimes e melhorar a segurança.",
                afirmacao: "Você acredita que prever comportamentos pode ser uma ferramenta importante para a segurança pública."
            },
            {
                texto: "Não, isso é uma violação da privacidade e pode ser usado de forma abusiva.",
                afirmacao: "Você acha que o uso excessivo de IA para prever comportamentos pode ser uma forma de controle social injusto."
            }
        ]
    },
    // Questões sobre IA no cotidiano
    {
        enunciado: "Você tem um assistente virtual que pode realizar tarefas por você, como compras, agendar compromissos, e até enviar e-mails. Até onde você confiaria nele?",
        alternativas: [
            {
                texto: "Eu confiaria totalmente, já que ele pode me ajudar em muitas tarefas.",
                afirmacao: "Você acredita que os assistentes virtuais são eficientes e podem facilitar bastante o dia a dia."
            },
            {
                texto: "Não confiaria totalmente. Algumas tarefas ainda precisariam ser feitas por mim para garantir a qualidade.",
                afirmacao: "Você acha que os assistentes virtuais são úteis, mas ainda precisam da supervisão humana."
            }
        ]
    },
    {
        enunciado: "Imagine que uma IA pode fazer uma análise detalhada sobre o seu comportamento online, criando um perfil completo sobre você. Você aceitaria que ela usasse esses dados?",
        alternativas: [
            {
                texto: "Sim, pois isso poderia melhorar minha experiência online com recomendações mais precisas.",
                afirmacao: "Você está disposto a sacrificar parte da sua privacidade em troca de conveniência."
            },
            {
                texto: "Não, pois isso violaria minha privacidade e usaria meus dados sem meu consentimento.",
                afirmacao: "Você prefere manter o controle sobre seus dados e não confia no uso deles sem transparência."
            }
        ]
    },
    // Pergunta sobre a IA no futuro
    {
        enunciado: "Em um futuro próximo, a IA pode ser capaz de criar músicas e obras de arte originais. Você acha que isso será um avanço positivo ou negativo?",
        alternativas: [
            {
                texto: "Positivo, pois mais pessoas poderão criar e consumir arte de maneiras acessíveis.",
                afirmacao: "Você acredita que a IA pode democratizar a arte e oferecer novas possibilidades criativas."
            },
            {
                texto: "Negativo, pois isso pode diminuir o valor da arte feita por humanos e desvalorizar o trabalho artístico.",
                afirmacao: "Você tem receio de que a arte criada pela IA possa tirar a autenticidade e o valor emocional das obras."
            }
        ]
    }
];



let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
