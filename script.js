// carne - 400g por pessoa + de 6h -> 650g;
// cerveja - 1200mL por pessoa + de 6h -> 2000mL;
// refri e água - 1000mL por pessoa + de 6h -> 1500mL;

// crianças valem 0,5.

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado")

function calcular(){
    console.log("Calculando...")
    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value
    
    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) /2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) /2 * criancas);

    resultado.innerHTML = `<p>${qtdTotalCarne/1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja/355)} latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas/2000)} Garrafas Pet de Bebida</p>`
}

function carnePP(duracao){
    if(duracao >=6){
        return 600;
    }else{
        return 350;
    }
}

function cervejaPP(duracao){
    if(duracao >=6){
        return 1500;
    }else{
        return 1000;
    }
}

function bebidasPP(duracao){
    if(duracao >=6){
        return 1000;
    }else{
        return 700;
    }
}














