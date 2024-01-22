document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    //teste para verificar a posição do scroll 
    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY;

        if(posicaoAtual < alturaHero){
            ocultaElementosDoHeader();
        }else{
            exibeElementosDoHeader();
        }
    })

    //sessão de atrações, programação das abas
    for (let i=0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(botao) {
            const tabTarget = botao.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`);
            hideAllTabs();
            tab.classList.add('shows__list--is-active');
            removeActiveButton();
            botao.target.classList.add('shows__tabs__button--is-active')
        })
    }

    //faq, accordion
    for (let i = 0; 1 < questions.length; i++){
        questions[i].addEventListener('click', abreOuFechaResposta)
    }

    
    
})

//para que o logo e o botão assinar fiquem escondidos ao dar scroll down
function ocultaElementosDoHeader(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hiden');
}
//remover a classe que esconde
function exibeElementosDoHeader(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hiden');
}

function abreOuFechaResposta(elemento){
    const classe = 'faq__questions__item--is-open';
    
     const elementoPai = elemento.target.parentNode;

     elementoPai.classList.toggle(classe)
}

function removeActiveButton(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function hideAllTabs(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}

