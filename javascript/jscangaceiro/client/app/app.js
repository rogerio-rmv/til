let controller = new NegociacaoController();

//Associa o evento de submissão 
document
    .querySelector('.form')
    .addEventListener('submit', function(event){
        controller.adiciona(event);
    });