function capturarDados(){
    //Pegando o valor do emprestimo
    let valor = document.getElementById("valor").value;
    //Taxa
    let taxa = document.getElementById("taxa").value;
    //Tempo 
    let tempo = document.getElementById("tempo").value;
    //Convertendo para float o valor, int o tempo e float a taxa
    valor = parseFloat(valor);
    taxa = parseFloat(taxa);
    tempo = parseInt(tempo);
    //Verificando se os valores são válidos
    let x = (isNaN(valor) == true || valor == undefined || valor == "") && (isNaN(tempo) == true || tempo == undefined || tempo == "") && (isNaN(taxa) == true || taxa == undefined || taxa == "");
    if(x == true)alert("Valores inválidos!");
    else{
        //Posso tratar os valores. Chamando a função para realizar o calculo
        let montante = calcularMontante(valor, taxa, tempo);
        escreverNaTela(montante, valor, taxa, tempo);
    }
}
function calcularMontante(valor, taxa, tempo){
    juro = valor * taxa/100 * tempo;
    return valor + juro;
}
function escreverNaTela(montante, valor, taxa, tempo){
    //Pegando o conteudo interno da div
    var x = document.getElementById("conteudo-principal").innerHTML;
    //Colocando um titulo
    x = `<h1>R$ ${valor} aplicados à uma taxa de ${taxa} a.m, por ${tempo} meses, geraram um montante de R$ ${montante}</h1>`;
    document.getElementById("conteudo-principal").innerHTML = x;
    //Colocando o input de texto
    x = `<input type="text" class="campo_digitacao" id="resultado">`;
    document.getElementById("conteudo-principal").innerHTML += x;
    //Colocando os botoes
    x = `<br><br><button class="botao" type="button">Menu</button><br><br>`;
    document.getElementById("conteudo-principal").innerHTML += x;
    //Colocando o valor no input 
    document.getElementById("resultado").value = `R$ ${montante}`;
}