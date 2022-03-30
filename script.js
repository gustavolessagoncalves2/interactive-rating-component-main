//Select -> Botão Rate clicado fica cinza claro, todos os outros botões Rate ficam cinza escuro. Adiciona o valor do botão clicado numa variável. 

//Adicionar ouvidores nos botões

//Melhoria: USAR QUERYSELECTALL E FOR

//-------------------------------------------------------
    

var buttons = document.querySelectorAll('button[type="button"]')

for(var i=0; i<buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        this.style.backgroundColor = "red";
    })
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

