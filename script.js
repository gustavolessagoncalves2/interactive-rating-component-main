//Select -> Botão Rate clicado fica cinza claro, todos os outros botões Rate ficam cinza escuro. Adiciona o valor do botão clicado numa variável. 

//Adicionar ouvidores nos botões

//Melhoria: USAR QUERYSELECTALL E FOR

//-------------------------------------------------------

//Pegando os valores dos Botões

txtRate1 = document.querySelector('button[name="1"]')
txtRate2 = document.querySelector('button[name="2"]')
txtRate3 = document.querySelector('button[name="3"]')
txtRate4 = document.querySelector('button[name="4"]')
txtRate5 = document.querySelector('button[name="5"]')

//Selecionando os botões

function select1() {
    rate = Number(txtRate1.value)
    alert(rate)

    //mudando cor do botão selecionado
    txtRate1.style.background = 'hsl(217, 12%, 63%)'

    //mudando cor dos outros botões para a cor padrão
    txtRate2.style.background = 'hsla(216, 12%, 54%, 0.144)'
    txtRate3.style.background = 'hsla(216, 12%, 54%, 0.144)'
    txtRate4.style.background = 'hsla(216, 12%, 54%, 0.144)'
    txtRate5.style.background = 'hsla(216, 12%, 54%, 0.144)'
}

function select2() {
    rate = Number(txtRate2.value)
    alert(rate)

    //mudando cor do botão selecionado
    txtRate2.style.background = 'hsl(217, 12%, 63%)'

    //mudando cor dos outros botões para a cor padrão
    txtRate1.style.background = 'hsla(216, 12%, 54%, 0.144)'
    txtRate3.style.background = 'hsla(216, 12%, 54%, 0.144)'
    txtRate4.style.background = 'hsla(216, 12%, 54%, 0.144)'
    txtRate5.style.background = 'hsla(216, 12%, 54%, 0.144)'
}

function select3() {
    rate = Number(txtRate3.value)
    alert(rate)

    //mudando cor do botão selecionado
    txtRate3.style.background = 'hsl(217, 12%, 63%)'

    //mudando cor dos outros botões para a cor padrão
    txtRate1.style.background = 'hsla(216, 12%, 54%, 0.144)'
    txtRate2.style.background = 'hsla(216, 12%, 54%, 0.144)'
    txtRate4.style.background = 'hsla(216, 12%, 54%, 0.144)'
    txtRate5.style.background = 'hsla(216, 12%, 54%, 0.144)'
}

function select4() {
    rate = Number(txtRate4.value)
    alert(rate)

    //mudando cor do botão selecionado
    txtRate4.style.background = 'hsl(217, 12%, 63%)'

    //mudando cor dos outros botões para a cor padrão
    txtRate1.style.background = 'hsla(216, 12%, 54%, 0.144)'
    txtRate2.style.background = 'hsla(216, 12%, 54%, 0.144)'
    txtRate3.style.background = 'hsla(216, 12%, 54%, 0.144)'
    txtRate5.style.background = 'hsla(216, 12%, 54%, 0.144)'
}

function select5() {
    rate = Number(txtRate5.value)
    alert(rate)

    //mudando cor do botão selecionado
    txtRate5.style.background = 'hsl(217, 12%, 63%)'

    //mudando cor dos outros botões para a cor padrão
    txtRate1.style.background = 'hsla(216, 12%, 54%, 0.144)'
    txtRate1.style.background = 'hsla(216, 12%, 54%, 0.144)'
    txtRate3.style.background = 'hsla(216, 12%, 54%, 0.144)'
    txtRate4.style.background = 'hsla(216, 12%, 54%, 0.144)'    
}

//Submit -> Muda de página. Adiciona o valor na mensagem na página.

function submit() {

}

