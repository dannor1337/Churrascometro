//Carne - 400 gr por pessoa + de 6 hroas - 650
//Cerveja - 1200 ml por pessoa + 6 horas - 2000 ml
//Refrigerante/aguya - 1000 ml por pessoa + 6 horas 1500ml

// crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");
let resultado2 = document.getElementById("resultado2");

function calcular(){
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    
    let carne = carnePP(duracao);
    let cerveja = cervejaPP(duracao);
    let bebidas = bebidasPP(duracao);


    let qtdTotalCarne = (carne * adultos + (carne/2)*criancas)/1000;
    let qtdTotalCerveja = (cerveja * adultos)/1000;
    let qtdTotalBebidas = (bebidas * adultos + (bebidas/2)*criancas)/1000;
    console.log(qtdTotalBebidas, qtdTotalCarne, qtdTotalCerveja);

    resultado.innerHTML = `<p><img src="./imagens/carne.png">${qtdTotalCarne}Kg de Carne</p>`
    resultado.innerHTML += `<p><img src="./imagens/cerveja.png">${qtdTotalCerveja}L de Cerveja</p>`
    resultado.innerHTML += `<p><img src="./imagens/refri.png">${qtdTotalBebidas}L de Bebidas</p>`

    resultado2.innerHTML = `<h3 class ="calc">Gostaria de calcular o valor do churras?</h3>`
    resultado2.innerHTML += `<h3 class ="calc" ><img src="./imagens/relogio.png"> Em breve</h3>`
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