function clickfound0() {
    var valorElemento = document.getElementById("value1");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
    var valorEmReal = valorEmDolarNumerico * 5.33;
    valorFix = valorEmReal.toFixed(1)

    console.log(valorFix);

    var elementoValorConvertido = document.getElementById("conversionValue0")
    var valorConvertido = "O VALOR CONVERTIDO EM REAL É R$ " + valorFix;
    elementoValorConvertido.innerHTML = valorConvertido;
}


function clickfound1() {
    var valorElemento1 = document.getElementById("value2");
    var valor1 = valorElemento1.value;
    var valorEmRealNumerico = parseFloat(valor1);
    var valorEmDolar = valorEmRealNumerico / 5.29;
    var valorFixado = valorEmDolar.toFixed(1)
    console.log(valorFixado);

    var elementoValorConveertido1 = document.getElementById("conversionValue0");
    var valorConvertido1 = "O VALOR CONVERTIDO EM DOLAR É U$ " + valorFixado;
    elementoValorConveertido1.innerHTML = valorConvertido1;
    
}