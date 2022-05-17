//Select -> Botão Rate clicado fica cinza claro, todos os outros botões Rate ficam cinza escuro. Adiciona o valor do botão clicado numa variável. Alterna a Class entre select e rate


//Melhoria: USAR QUERYSELECTALL E FOR

//-------------------------------------------------------
    
//PASSO 1 - Pegar os valores dos buttons

const txtButton1 = document.querySelector('button[value="1"]')
const Button1 = txtButton1.value

const txtButton2 = document.querySelector('button[value="2"]')
const Button2 = txtButton2.value

const txtButton3 = document.querySelector('button[value="3"]')
const Button3 = txtButton3.value

const txtButton4 = document.querySelector('button[value="4"]')
const Button4 = txtButton4.value

const txtButton5 = document.querySelector('button[value="5"]')
const Button5 = txtButton5.value

const txtSubmitButton = document.querySelector('button.submit')

//PASSO 2 - Mudar a cor do botão clicado (aplicar a class select no button clicado e aplicar a class select nos demais buttons) e habilitar o button subtmit

function select1() {
    txtButton1.classList.toggle("select") 
    txtButton2.classList.remove("select") 
    txtButton3.classList.remove("select") 
    txtButton4.classList.remove("select") 
    txtButton5.classList.remove("select")
    txtSubmitButton.removeAttribute('disabled')
}
function select2() {
    txtButton1.classList.remove("select") 
    txtButton2.classList.toggle("select") 
    txtButton3.classList.remove("select") 
    txtButton4.classList.remove("select") 
    txtButton5.classList.remove("select") 
    txtSubmitButton.removeAttribute('disabled')
}
function select3() {
    txtButton1.classList.remove("select") 
    txtButton2.classList.remove("select") 
    txtButton3.classList.toggle("select") 
    txtButton4.classList.remove("select") 
    txtButton5.classList.remove("select") 
    txtSubmitButton.removeAttribute('disabled')
}
function select4() {
    txtButton1.classList.remove("select") 
    txtButton2.classList.remove("select") 
    txtButton3.classList.remove("select") 
    txtButton4.classList.toggle("select") 
    txtButton5.classList.remove("select") 
    txtSubmitButton.removeAttribute('disabled')
}
function select5() {
    txtButton1.classList.remove("select") 
    txtButton2.classList.remove("select") 
    txtButton3.classList.remove("select") 
    txtButton4.classList.remove("select") 
    txtButton5.classList.toggle("select") 
    txtSubmitButton.removeAttribute('disabled')
}

//PASSO 3 - Pegar somente o Button com a class select



//Submit -> Desoculta página2. Adiciona o valor na mensagem na página.

function submit() {
    //Ocultando página Score    
    var pagina2 = document.getElementById('pagina2')
    pagina2.style.display = 'flex'
    
    //Exibindo página Thank-you
    var pagina1 = document.getElementById('pagina1')
    pagina1.style.display = 'none'
}

