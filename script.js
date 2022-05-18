//PASSO 1 - Pegar os valores dos buttons

const txtButton1 = document.querySelector('button[value="1"]')
const button1 = txtButton1.value

const txtButton2 = document.querySelector('button[value="2"]')
const button2 = txtButton2.value

const txtButton3 = document.querySelector('button[value="3"]')
const button3 = txtButton3.value

const txtButton4 = document.querySelector('button[value="4"]')
const button4 = txtButton4.value

const txtButton5 = document.querySelector('button[value="5"]')
const button5 = txtButton5.value

var buttonSelected = 0

const txtSubmitButton = document.querySelector('button.submit')

//PASSO 2 - Mudar a cor do botão clicado (aplicar a class select no button clicado e remover a class select nos demais buttons), habilitar o button subtmit e atribuir o valor do botão clicado à variável buttonSelected

function select1() {
    txtButton1.classList.toggle("select") 
    txtButton2.classList.remove("select") 
    txtButton3.classList.remove("select") 
    txtButton4.classList.remove("select") 
    txtButton5.classList.remove("select")
    txtSubmitButton.removeAttribute('disabled')  
    buttonSelected = button1  
}
function select2() {
    txtButton1.classList.remove("select") 
    txtButton2.classList.toggle("select") 
    txtButton3.classList.remove("select") 
    txtButton4.classList.remove("select") 
    txtButton5.classList.remove("select") 
    txtSubmitButton.removeAttribute('disabled')
    buttonSelected = button2 
}
function select3() {
    txtButton1.classList.remove("select") 
    txtButton2.classList.remove("select") 
    txtButton3.classList.toggle("select") 
    txtButton4.classList.remove("select") 
    txtButton5.classList.remove("select") 
    txtSubmitButton.removeAttribute('disabled')  
    buttonSelected = button3   
}
function select4() {
    txtButton1.classList.remove("select") 
    txtButton2.classList.remove("select") 
    txtButton3.classList.remove("select") 
    txtButton4.classList.toggle("select") 
    txtButton5.classList.remove("select") 
    txtSubmitButton.removeAttribute('disabled') 
    buttonSelected = button4
}
function select5() {
    txtButton1.classList.remove("select") 
    txtButton2.classList.remove("select") 
    txtButton3.classList.remove("select") 
    txtButton4.classList.remove("select") 
    txtButton5.classList.toggle("select") 
    txtSubmitButton.removeAttribute('disabled')
    buttonSelected = button5 
}

//PASSO 3 - Ocultar  a Página Score e desocultar a Página Thank-you. Adicionar o valor do botão clicado à mensagem

function submit() {

    //Adicionando o valor à mensagem
    var txtTotalSelecionado = document.getElementById('totalSelecionado')
    txtTotalSelecionado.innerText = `You selected ${buttonSelected} out of 5`

    //Ocultando página Score    
    var pagina2 = document.getElementById('pagina2')
    pagina2.style.display = 'flex'
    
    //Exibindo página Thank-you
    var pagina1 = document.getElementById('pagina1')
    pagina1.style.display = 'none'
}