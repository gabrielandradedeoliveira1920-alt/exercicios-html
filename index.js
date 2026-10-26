// ==============================================================================
// EXERCÍCIO 1 e 2: Conversão de tipos de dados e Operadores
// ==============================================================================
document.getElementById("btnCalcular").addEventListener("click", function() {
    const valorTexto = document.getElementById("qtdPessoas").value;
    const quantidade = Number.parseInt(valorTexto, 10);
    const resCalculo = document.getElementById("resCalculo");

    if (Number.isNaN(quantidade) || valorTexto.trim() === "") {
        resCalculo.textContent = "Erro: Digite um número inteiro válido.";
        resCalculo.className = "mensagem-status erro";
    } else {
        const total = Number(quantidade) + 12;
        resCalculo.textContent = `Total de cestas: ${total} unidades.`;
        resCalculo.className = "mensagem-status sucesso";
    }
});


// ==============================================================================
// EXERCÍCIO 3: Variáveis e tipos de dados (typeof)
// ==============================================================================
document.getElementById("btnVerificarTipos").addEventListener("click", function() {
    const nomeLinha = "Linha 04 - Centro";
    const qtdPassageiros = 85;
    const emFuncionamento = true;
    const resTipos = document.getElementById("resTipos");

    resTipos.textContent = `Linha (${typeof nomeLinha}) | Passageiros (${typeof qtdPassageiros}) | Ativa (${typeof emFuncionamento})`;
    resTipos.className = "mensagem-status sucesso";
});


// ==============================================================================
// EXERCÍCIO 4: DOM e seleção por ID
// ==============================================================================
document.getElementById("btnAtualizarDom").addEventListener("click", function() {
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = "Comunicado Oficial: Atendimento ampliado no posto central.";
});


// ==============================================================================
// EXERCÍCIO 5: Eventos (Toggle de exibição)
// ==============================================================================
const btnOrientacao = document.getElementById("btnOrientacao");
const textoOrientacao = document.getElementById("textoOrientacao");

btnOrientacao.addEventListener("click", function() {
    if (textoOrientacao.classList.contains("oculto")) {
        textoOrientacao.classList.remove("oculto");
        btnOrientacao.textContent = "Ocultar Orientação de Vacinação";
    } else {
        textoOrientacao.classList.add("oculto");
        btnOrientacao.textContent = "Exibir Orientação de Vacinação";
    }
});


// ==============================================================================
// EXERCÍCIO 6 e 7: Condicionais e Validação de Formulário
// ==============================================================================
const formInscricao = document.getElementById("formInscricao");
formInscricao.addEventListener("submit", function(event) {
    event.preventDefault();
    const nome = document.getElementById("nomeCidadao").value.trim();
    const email = document.getElementById("emailCidadao").value.trim();
    const resValidacao = document.getElementById("resValidacao");

    if (nome === "" || email === "") {
        resValidacao.textContent = "Erro: Preencha todos os campos obrigatórios!";
        resValidacao.className = "mensagem-status erro";
    } else if (!email.includes("@") || !email.includes(".")) {
        resValidacao.textContent = "Erro: Digite um e-mail válido com '@' e ponto.";
        resValidacao.className = "mensagem-status erro";
    } else {
        resValidacao.textContent = "Sucesso: Inscrição enviada com sucesso!";
        resValidacao.className = "mensagem-status sucesso";
        formInscricao.reset();
    }
});


// ==============================================================================
// EXERCÍCIO 8: Funções com parâmetros
// ==============================================================================
function calcularCusto(quantidade, precoUnitario) {
    return quantidade * precoUnitario;
}

document.getElementById("btnCalcularCusto").addEventListener("click", function() {
    const custo = calcularCusto(15, 25.50);
    const resCusto = document.getElementById("resCusto");
    resCusto.textContent = `Custo estimado para 15 kits: R$ ${custo.toFixed(2)}`;
    resCusto.className = "mensagem-status sucesso";
});


// ==============================================================================
// EXERCÍCIO 9: Arrays e Laços (for...of)
// ==============================================================================
document.getElementById("btnListarCursos").addEventListener("click", function() {
    const cursos = [
        { nome: "Informática Básica", custo: 0 },
        { nome: "Inglês Comunitário", custo: 30 },
        { nome: "Robótica para Jovens", custo: 0 }
    ];
    
    const lista = document.getElementById("listaCursos");
    lista.innerHTML = ""; // Limpa a lista antes de preencher

    for (const curso of cursos) {
        const item = document.createElement("li");
        item.textContent = `Curso: ${curso.nome} | Custo: R$ ${curso.custo}`;
        lista.appendChild(item);
    }
});


// ==============================================================================
// EXERCÍCIO 10: Manipulação de Estilos do DOM (Legibilidade/Acessibilidade)
// ==============================================================================
const textoAcessivel = document.getElementById("textoAcessivel");
let tamanhoFonte = 16;

document.getElementById("btnAumentar").addEventListener("click", function() {
    tamanhoFonte += 2;
    textoAcessivel.style.fontSize = `${tamanhoFonte}px`;
});

document.getElementById("btnDiminuir").addEventListener("click", function() {
    tamanhoFonte = Math.max(12, tamanhoFonte - 2);
    textoAcessivel.style.fontSize = `${tamanhoFonte}px`;
});


// ==============================================================================
// EXERCÍCIO 11 e 17: Ética, Privacidade e Acessibilidade
// ==============================================================================
document.getElementById("formEtico").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("emailBoletim").value.trim();
    const resEtico = document.getElementById("resEtico");

    if (email === "") {
        resEtico.textContent = "Erro: Informe o e-mail.";
        resEtico.className = "mensagem-status erro";
    } else {
        resEtico.textContent = "Sucesso: O seu e-mail foi registado apenas para avisos da comunidade.";
        resEtico.className = "mensagem-status sucesso";
    }
});


// ==============================================================================
// EXERCÍCIO 12: Armazenamento Local (localStorage)
// ==============================================================================
const statusTema = document.getElementById("statusTema");

function atualizarTemaInterface() {
    const temaSalvo = localStorage.getItem("preferenciaTema") || "claro";
    statusTema.textContent = `Tema atualmente salvo no navegador: ${temaSalvo}`;
}

document.getElementById("btnAlternarTema").addEventListener("click", function() {
    const temaAtual = localStorage.getItem("preferenciaTema") || "claro";
    const novoTema = temaAtual === "claro" ? "escuro" : "claro";
    localStorage.setItem("preferenciaTema", novoTema);
    atualizarTemaInterface();
});

// Inicializa a exibição do tema ao carregar o script
atualizarTemaInterface();


// ==============================================================================
// EXERCÍCIO 13: Manipulação de JSON (JSON.parse)
// ==============================================================================
document.getElementById("btnProcessarJson").addEventListener("click", function() {
    const stringJson = '{"nome": "Oficina de Fotografia", "vagas": 20}';
    const oficinaObj = JSON.parse(stringJson);

    const resJson = document.getElementById("resJson");
    resJson.textContent = `Oficina: ${oficinaObj.nome} | Vagas abertas: ${oficinaObj.vagas}`;
    resJson.className = "mensagem-status sucesso";
});


// ==============================================================================
// EXERCÍCIO 14: Consumo de API (fetch)
// ==============================================================================
document.getElementById("btnConsumirApi").addEventListener("click", function() {
    const resApi = document.getElementById("resApi");
    resApi.textContent = "Consultando API de serviço público...";

    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => {
            if (!response.ok) {
                throw new Error("Falha na resposta do servidor.");
            }
            return response.json();
        })
        .then(dados => {
            resApi.textContent = `Sucesso na consulta API: ${dados.title}`;
            resApi.className = "mensagem-status sucesso";
        })
        .catch(erro => {
            resApi.textContent = `Erro na API: ${erro.message}`;
            resApi.className = "mensagem-status erro";
        });
});


// ==============================================================================
// EXERCÍCIO 15: Datas e Horários (Date)
// ==============================================================================
document.getElementById("btnExibirData").addEventListener("click", function() {
    const agora = new Date();
    const dataFormatada = agora.toLocaleDateString("pt-PT", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });

    const resData = document.getElementById("resData");
    resData.textContent = `Data de emissão: ${dataFormatada}`;
    resData.className = "mensagem-status sucesso";
});


// ==============================================================================
// EXERCÍCIO 16: Operações Matemáticas
// ==============================================================================
document.getElementById("btnCalcularReciclagem").addEventListener("click", function() {
    const peso = Number(document.getElementById("pesoReciclavel").value);
    const preco = Number(document.getElementById("precoKg").value);
    const resReciclagem = document.getElementById("resReciclagem");

    if (Number.isNaN(peso) || Number.isNaN(preco) || peso <= 0 || preco <= 0) {
        resReciclagem.textContent = "Erro: Digite peso e preço válidos e maiores que zero.";
        resReciclagem.className = "mensagem-status erro";
    } else {
        const total = peso * preco;
        resReciclagem.textContent = `Total a pagar ao cooperado: R$ ${total.toFixed(2)}`;
        resReciclagem.className = "mensagem-status sucesso";
    }
});


// ==============================================================================
// EXERCÍCIO 18: Desempenho e Sustentabilidade (Execução sob demanda)
// ==============================================================================
let contadorCliques = 0;
document.getElementById("btnContar").addEventListener("click", function() {
    contadorCliques++;
    document.getElementById("resContador").textContent = `Cliques registrados: ${contadorCliques}`;
});


// ==============================================================================
// EXERCÍCIO 19: Segurança no DOM (Prevenção XSS com textContent)
// ==============================================================================
document.getElementById("btnPublicarMural").addEventListener("click", function() {
    const entrada = document.getElementById("inputMural").value;
    const resMural = document.getElementById("resMural");

    // textContent trata entradas do utilizador como texto literal sem executar scripts
    resMural.textContent = entrada;
});
// Localiza os elementos do DOM pelos respetivos IDs
const btnAcao = document.getElementById("btnAcao");
const mensagem = document.getElementById("mensagem");

// Adiciona o escutador de evento de clique desacoplado do HTML
btnAcao.addEventListener("click", function() {
    // Altera o texto de forma limpa e organizada
    mensagem.textContent = "Mensagem alterada com sucesso via ficheiro externo index.js!";
});