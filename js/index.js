const mediaQueryIpad = window.matchMedia('screen and (max-width: 767px)');
const burgerButton = document.querySelector('#burgerButton')
const menu = document.querySelector('.menu')
const menuItem = document.querySelectorAll('li');

function hideShow(){
    if(menu.classList.contains('is-active')){
        menu.classList.remove('is-active')
    }else{
        menu.classList.add('is-active')
    }
}

function validationMediaQuery(event){
    if(event.matches){
        burgerButton.addEventListener('click', hideShow)
        menuItem.forEach(item => item.addEventListener('click', hideShow))         
    }else{
        burgerButton.removeEventListener('click', hideShow)
        menuItem.forEach(item => item.removeEventListener('click', hideShow))
    }
}

mediaQueryIpad.addListener(validationMediaQuery)
validationMediaQuery(mediaQueryIpad)



