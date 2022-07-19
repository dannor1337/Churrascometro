//Carne - 400 gr por pessoa + de 6 hroas - 650
//Cerveja - 1200 ml por pessoa + 6 horas - 2000 ml
//Refrigerante/aguya - 1000 ml por pessoa + 6 horas 1500ml

// crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2)*criancas;
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2)*criancas;
    console.log(qtdTotalBebidas, qtdTotalCarne, qtdTotalCerveja);

    resultado.innerHTML = `<p>${qtdTotalCarne}g de Carne</p>`
    resultado.innerHTML += `<p>${qtdTotalCerveja}g de Cerveja</p>`
    resultado.innerHTML += `<p>${qtdTotalBebidas}g de Bebidas</p>`


}

function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    } else{
        return 400;
    }

}
function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    } else{
        return 1200;
    }
}
function bebidasPP(duracao){
    if(duracao >= 6){
        return 1500;
    } else{
        return 1000;
    }
}