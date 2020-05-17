//Obtém os campos do formulário
var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];

//Seleciona o body da tabela
var tbody = document.querySelector('table tbody');

//Inclui uma linha na tabela
document.querySelector('.form').addEventListener('submit', function(event){
    //Cancela a submissão do formulário
    event.preventDefault();

    var tr = document.createElement('tr');

    //Itera sobre os campos do formulário para preencher 
    //a nova linha
    campos.forEach(function(campo){
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    //Cria um td para listar o volume negociado
    var tdVolume = document.createElement('td');

    //Calcula o valor do volume negociado multiplicando
    //o valor (campos[1]) pela quantidade(campos[2])
    tdVolume.textContent = campos[1].value * campos[2].value;

    //Adiciona a td volume na tr
    tr.appendChild(tdVolume);

    //Adiciona o novo tr na corpo da tabela
    tbody.appendChild(tr);

    //limpa o campo data
    campos[0].value = '';
    //limpa o campo quantidade
    campos[1].value = 1;
    //limpa o campo valor
    campos[2].value = 0;
    //Foca no campo data
    campos[0].focus();
});