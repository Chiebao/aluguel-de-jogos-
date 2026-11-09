// Alterna um jogo entre "alugado" e "disponível" a partir do id do card
function alterarStatus(id) {
    let gameClick = document.getElementById(`game-${id}`);              // card do jogo clicado
    let imagem = gameClick.querySelector('.dashboard__item__img');       // capa do jogo
    let botao = gameClick.querySelector('.dashboard__item__button');     // botão Alugar/Devolver

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        // estava alugado: devolve
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    } else {
        // estava disponível: aluga
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }
}

// Anotações de estudo:
// - template string com crase permite usar variáveis com ${}
// - classList.contains verifica se o elemento tem uma classe
// - classList.add / remove liga e desliga o estilo de "alugado"
// - textContent troca o texto do botão
