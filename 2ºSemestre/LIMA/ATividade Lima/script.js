const container = document.querySelector(".container");

const btCadastrar = document.querySelector("#btCadastrar");

btCadastrar.addEventListener("click", (event) => {
          event.preventDefault();
          const inpImagem = document.querySelector("#imagem");
          const inpProduto = document.querySelector("#produto");
          const inpValor = document.querySelector("#valor");
          const box = document.createElement("div");
          box.className = "box";
          box.style.backgroundColor = inpCor.value;
          box.style.color=inpCor_Texto.value;

          const pNome = document.createElement("p");
          pNome.innerHTML = "Nome : " + inpNome.value;

          const pSobrenome = document.createElement("p");
          pSobrenome.innerHTML = "Sobrenome : " + inpSobrenome.value;

          const pImagem = document.createElement("p");
          pImagem.innerHTML = 
          
        

          box.appendChild(pImagem);
          box.appendChild(pNome);
          box.appendChild(pSobrenome);
          

          container.appendChild(box);
          inpImagem.value = "";
          inpProduto.value = "";
          inpValor.value = "";
          
          
          

});