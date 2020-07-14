console.log('Hello world')

const burgerButton = document.querySelector('#burgerButton')
const menu = document.querySelector('.menu')
const menuItem = document.querySelectorAll('li');

const hideShow = () =>{
    if(menu.classList.contains('is-active')){
        menu.classList.remove('is-active')
    }else{
        menu.classList.add('is-active')
    }
}

burgerButton.addEventListener('click', () =>{
    hideShow()
})

menuItem.forEach(x => x.addEventListener('click', ()=>{
    hideShow ()   
}))


