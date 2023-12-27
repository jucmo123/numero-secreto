let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

/* Passos/comandos git para clonar repositório

TESTE ANTES DE BAIXAR DO GITHUB

Acessar repositório do projeto, clicar e copiar link;
Abrir o terminal do windows na pasta a clonar o repositório e digitar o comando:
    git clone git@github.com:jucmo123/numero-secreto.git
    (Acima, clonando o: https://github.com/jucmo123/numero-secreto)
    Feito isso, a pasta do repositório estará disponível no local indicado
Abrir na IDE e fazer alguma alteração e salvar
git status
    Verifica quais arquivos foram alterados, mas:
    Vermelho: arquivos modificados que não foram adicionados para fazer o commit
git add . (faz a adição dos arquivos modificados)
git status (novamente para checar)
    Verde: Os arquivos modificados foram adicionados/registrados para o commit
git commit -m "Aqui, mensagem descrevendo a alteração do código"
    A mensagem entre aspas, vai aparecer no repositório online do GitHub
git log
    Mostra o histórico das alterações, com datas e quem as fez ao longo do tempo
git remote
    Mostra o nome (origin) do repositório clonado
    Resumindo, temos o repositório remoto adicionado
git push origin main
    Envia cópia do repositório para o GitHub
    "origin" é o apelido do repositório remoto
    Feito isso, atualizar o repositório no GitHub que o commite já estará disponível

*/

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}







