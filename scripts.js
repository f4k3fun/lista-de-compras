const form = document.querySelector("form");
const input = document.querySelector("#product");
const list = document.querySelector("ul");


// Tratando input para nao digitar numeros.
input.addEventListener("input", () => {
  const value = input.value

  const hasNumberRegex = /\d+/g;

  input.value = value.replace(hasNumberRegex, "");

  if(hasNumberRegex.test(value)){
    alert("Voce esta digitando um numero, por favor somente letras");
  }
});



// Criando evento de submit do formulario.
form.addEventListener("submit", (e) => {
  e.preventDefault();


  //Verificando se o valor do input nao esta vazio.

  try {

    if(input.value){
      console.log("Produto criado na lista");
  
      // Chamando funcao para criar elemento HTML.
      newProduct(input.value);
      resetInput(input);
    } else {
      alert("Digite o nome do produto");
    }
  } catch (e){
    alert(e + " Ocorreu um erro tente mais tarde");
  }
})



// Criando produto na lista de produtos
function newProduct(valor){

  const li = document.createElement("li");
  li.classList.add("product");

  const div = document.createElement("div");

  const p = document.createElement("p");
  p.textContent = valor;

  const span = document.createElement("span");

  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");

  const img = document.createElement("img");
  img.setAttribute("src", "assets/icons/Frame-3.svg");

  li.append(div);
  li.append(img);
  div.append(span);
  div.append(p);
  span.append(input);


  list.append(li);
}


// Criando reset de input.
function resetInput(input){
  input.value = "";
}