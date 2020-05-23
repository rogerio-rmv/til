class NegociacaoController {

    constructor(){
        //Atalho para querySelector
        let $ = document.querySelector.bind(document);

        //Campos do formulário
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event){
        //Cancela a submissão do formulário
        event.preventDefault();

        console.log(this._inputData.value);
        console.log(parseInt(this._inputQuantidade.value));
        console.log(parseFloat(this._inputValor.value));
    }
}