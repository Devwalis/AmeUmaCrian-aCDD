let Btnmenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlaymenu = document.getElementById('overlaymenu')

Btnmenu.addEventListener('click', () =>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click',() =>{
    menu.classList.remove('abrir-menu')

})

overlaymenu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})