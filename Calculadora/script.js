function calcular(event) {
    event.preventDefault();
    
    var numHomens = parseInt(document.getElementById("numHomens").value);
    var numMulheres = parseInt(document.getElementById("numMulheres").value);
    var numCriancas = parseInt(document.getElementById("numCriancas").value);

    var resultados = []; 

    // Verificar se o checkbox de cada item de carne está marcado e, se estiver, calcular a quantidade
    if (document.getElementById("carneDeBoi").checked) {
        var linguiçaSuina = numHomens * 0.3 + numMulheres * 0.3 + numCriancas * 0.2;
        resultados.push("Carne de Boi: " + linguiçaSuina.toFixed(2) + " kg");
    }
    if (document.getElementById("linguiçaSuina").checked) {
        var linguiçaSuina = numHomens * 0.3 + numMulheres * 0.3 + numCriancas * 0.2;
        resultados.push("Linguiça Suína: " + linguiçaSuina.toFixed(2) + " kg");
    }
    if (document.getElementById("costelaSuina").checked) {
        var costelaSuina = numHomens * 0.3 + numMulheres * 0.3 + numCriancas * 0.2;
        resultados.push("Costela Suína: " + costelaSuina.toFixed(2) + " kg");
    }
    if (document.getElementById("picanhaSuina").checked) {
        var picanhaSuina = numHomens * 0.3 + numMulheres * 0.3 + numCriancas * 0.2;
        resultados.push("Picanha Suína: " + picanhaSuina.toFixed(2) + " kg");
    }

    // Verificar se o checkbox de cada item de acompanhamento está marcado e, se estiver, calcular a quantidade
    if (document.getElementById("pãoDeAlho").checked) {
        var paoDeAlho = numHomens * 1 + numMulheres * 1 + numCriancas * 1;
        resultados.push("Pão de Alho: " + paoDeAlho.toFixed(2) + " unidades");
    }
    if (document.getElementById("farofa").checked) {
        var farofa = numHomens * 0.2 + numMulheres * 0.2 + numCriancas * 0.1;
        resultados.push("Farofa: " + farofa.toFixed(2) + " kg");
    }
    if (document.getElementById("queijo").checked) {
        var queijo = numHomens * 2 + numMulheres * 2 + numCriancas * 1;
        resultados.push("Queijo Coalho: " + queijo.toFixed(2) + " kg");
    }
    if (document.getElementById("arroz").checked) {
        var arroz = numHomens * 0.2 + numMulheres * 0.2 + numCriancas * 0.2;
        resultados.push("Arroz: " + arroz.toFixed(2) + " kg");
    }

    // Verificar se o checkbox de cada item de bebida está marcado e, se estiver, calcular a quantidade
    if (document.getElementById("água").checked) {
        var agua = (numHomens + numMulheres + numCriancas) * 0.5;
        resultados.push("Água: " + agua.toFixed(2) + " litros");
    }
    if (document.getElementById("cervejas").checked) {
        var cervejas = numHomens * 4 + numMulheres * 3;
        resultados.push("Cervejas: " + cervejas + " latas");
    }
    if (document.getElementById("Sucos").checked) {
        var sucos = (numHomens + numMulheres + numCriancas) * 0.5;
        resultados.push("Sucos: " + sucos.toFixed(2) + " litros");
    }
    if (document.getElementById("refrigerantes").checked) {
        var refrigerantes = (numHomens + numMulheres + numCriancas) * 1;
        resultados.push("Refrigerantes: " + refrigerantes.toFixed(2) + " litros");
    }

    // Exibir resultados
    var listaResultados = document.getElementById("listaResultados");
    listaResultados.innerHTML = ""; // Limpar resultados anteriores

    if (resultados.length > 0) {
        var resultadosHTML = "<h2>Quantidade de itens para o Churrasco:</h2><ul>";
        resultados.forEach(function (resultado) {
            resultadosHTML += "<li>" + resultado + "</li>";
        });
        resultadosHTML += "</ul>";
        listaResultados.innerHTML = resultadosHTML;
    } else {
        listaResultados.innerHTML = "<p>Nenhum item selecionado para calcular.</p>";
    }

     // Exemplo de mostrar o segundo botão após o cálculo ser feito
    var botaoContratar = document.getElementById("contratarServico");
    botaoContratar.style.display = "block";
    botaoContratar.classList.add("destacado");
}

