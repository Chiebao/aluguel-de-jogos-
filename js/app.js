//para concatenar usamos crase `
//para puxar variáveis na concatenação colocamos ${}


function alterarStatus (id) {                                               //para acrescentar a função com o ID
    let gameClick = document.getElementById(`game-${id}`);                  //let cria variável e puxar ID sempre pega o doc+ getId
    let imagem = gameClick.querySelector ('.dashboard__item__img') ;       //o queryekector filta o game clicado quando junto da variável game
    let botao = gameClick.querySelector ('.dashboard__item__button');
   // let nomeJ = gameClick.querySelector ('.dashboard__item__name');
  // alert (nomeJ.textContent);                                            // isso faz com que abra uma janela para sabermos se estamos fazendo certo


}
if (imagem.classList.contains('dashboard__item__img--rented')) {
    imagem.classList.remove('dashboard__item__img--rented');
    botao.classList.remove('dashboard__item__button--return');
    botao.textContent = 'Alugar';
} else {
    imagem.classList.add('dashboard__item__img--rented');
    botao.classList.add('dashboard__item__button--return');
    botao.textContent = 'Devolver';
}

//se eu puxar a classList puxa os elementos do HTML, o contains é para saber se contem uma classe em especifico
//para remover a classe
//text.Content serve para mudar a escrita
//add para adicionar a classe