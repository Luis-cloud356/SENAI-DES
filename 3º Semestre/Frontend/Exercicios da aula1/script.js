//Atividade 1
function reajustar(){
    let salario = Number(document.getElementById('salario').value);
    let resultado = document.getElementById('resultado');
    let bonus = 0;

    if(salario > 2000){
        bonus = salario * (10 / 100);
    }
    let salarioFinal = salario - bonus;

    resultado.innerHTML = 
    `Desconto de R$ ${bonus.toFixed(2)} <br>Preço Final R$ ${salarioFinal.toFixed(2)}`;
}
// document.getElementById('salario').addEventListener("keypress",function(event){
//     if(event.key === "Enter"){
//         reajustar();
//     }

;
//Atividade 2
function ajuste(){
      //let - variavel
      let compra = Number(document.getElementById('money').value);
      let resultado = document.getElementById('resultado');
      let aumento = 0;

      if(compra < 150 )
      {
        aumento = 20
      }
      let compraFinal = compra + aumento;

      resultado.innerHTML = 
    `Frete de R$ ${aumento.toFixed(2)} <br>Preço Final R$ ${compraFinal.toFixed(2)}`;
};  
//Atividade 3
function calculoDesconto(){
      let pagamento = Number(document.getElementById('valor').value);
      let resultado = document.getElementById('resultado');
      let desconto = 0;

      if(pagamento > 200 )
      {
         desconto = pagamento * (5 / 100);
      }
      let valorFinal = pagamento - desconto;

      resultado.innerHTML = 
    `Desconto de R$ ${desconto.toFixed(2)} <br>Preço Final R$ ${valorFinal.toFixed(2)}`;
};  
//Atividade 4
function calculoTaxa(){
      //let - variavel
      let preco = Number(document.getElementById('valor').value);
      let resultado = document.getElementById('resultado');
      let taxa = 0;

      if(preco > 100 )
      {
        taxa = preco * 10/100;
      }
      let precoFinal = preco + taxa;

      resultado.innerHTML = 
    `Taxa de R$ ${taxa.toFixed(2)} <br>Preço Final R$ ${precoFinal.toFixed(2)}`;
};  

//Atividade 5
function calculoMulta(){
      //let - variavel
      let preco = Number(document.getElementById('valor').value);
       let dia = Number(document.getElementById('dia').value);
      let resultado = document.getElementById('resultado');
      let multa = 0;

      if(dia > 0 )
      {
        multa = preco * 2/100;
      }
      let multasFinal = preco + multa;

      resultado.innerHTML = 
    `Taxa de R$ ${multa.toFixed(2)} <br>Preço Final R$ ${multasFinal.toFixed(2)}`;
};  

//Atividade 6
function calculoCashback(){
      //let - variavel
      let valor = Number(document.getElementById('valor').value);
      let resultado = document.getElementById('resultado');
      let cashback = 0;

      if(valor > 300 )
      {
        cashback = valor * 5/100;
      }
      let valorFinal = valor - cashback;

      resultado.innerHTML = 
    `Valor de R$ ${cashback.toFixed(2)} <br>Preço Final R$ ${valorFinal.toFixed(2)}`;
};  