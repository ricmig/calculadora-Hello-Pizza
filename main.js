var input = document.querySelectorAll(".quantidade");
var botaoIncrementa = document.querySelectorAll('.btn-incrementa');
var botaoDecrementa = document.querySelectorAll('.btn-decrementa');
var total = 0;
var totalID = document.querySelector('#total');
var totalReal = document.querySelector("#totalReal");
var totalRealAux = 0;
var precoItemClass = document.querySelectorAll('.preco-item');
var b = 0;
var a = 0;
var inputPizzas = document.querySelector(".inputpi");
inputPizzas.value = 1;
var precoPizzaValor = document.querySelectorAll(".precoPizzaValor");
var valorPessoa = document.querySelector("#valorPessoa");
var formPedidos = document.querySelector('#formPedidos');
var pedacosPorPessoa = document.querySelector("#pedacosPorPessoa");

for(let i = 0; i < precoPizzaValor.length; i++){
    precoPizzaValor[i].value = 30;
}

function pizza(){   
    valorPessoa.innerText = "R$ " + parseFloat(totalRealAux) / inputPizzas.value;
} 

function pedacos(){
    let x;
    let y;
    x = Math.floor((total * 8) / inputPizzas.value);
    y = Math.floor((total * 8) % inputPizzas.value);
    pedacosPorPessoa.innerText = x + " pedaço(s) para cada. " + y + " pedaço(s) sobrando.";
}

formPedidos.addEventListener('click', () => {
    pizza();
    pedacos();
});


for (let i = 0; i < botaoIncrementa.length; i++) {
    botaoIncrementa[i].addEventListener('click', () => {
        input[i].value++
        total++;
        a = Number.parseFloat(precoItemClass[i].value);
        b = b + a;
        if (total > 9) {
            input[i].value--
            total--
            b=b-a;
        }
        totalID.innerText = total;
        totalRealAux = b;
        totalReal.innerText = 'R$ ' + b;
         
        
    });
}

for (let i = 0; i < botaoDecrementa.length; i++) {

    botaoDecrementa[i].addEventListener('click', () => {
        if (input[i].value > 0) {
            input[i].value--
            total--;
            a = Number.parseFloat(precoItemClass[i].value);
            b = b - a;
        }
        totalID.innerText = total;
        totalRealAux = b;
        totalReal.innerText = 'R$ ' + b;
        
    });
}



