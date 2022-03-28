//Select -> Botão Rate clicado fica cinza claro, todos os outros botões Rate ficam cinza escuro. Adiciona o valor do botão clicado numa variável. 

//Adicionar ouvidores nos botões

//Melhoria: USAR QUERYSELECTALL E FOR

//-------------------------------------------------------

var txtRate1 = document.querySelector('button[value="1"]')
var txtRate2 = document.querySelector('button[value="2"]')
var txtRate3 = document.querySelector('button[value="3"]')
var txtRate4 = document.querySelector('button[value="4"]')
var txtRate5 = document.querySelector('button[value="5"]')



txtRate1.addEventListener("Click", select())

function select() {
    alert("teste")
}




//Submit -> Desoculta página2. Adiciona o valor na mensagem na página.

function submit() {
    //Ocultando página Score    
    var pagina2 = document.getElementById('pagina2')
    pagina2.style.display = 'flex'
    
    //Exibindo página Thank-you
    var pagina1 = document.getElementById('pagina1')
    pagina1.style.display = 'none'
}

