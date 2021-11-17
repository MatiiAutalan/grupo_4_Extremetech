alert('asdasdas')
let changePassword = document.querySelector('.btnPass')
let ventana = document.querySelector('.cambiar-password')
let datos = document.querySelector('#datos')
let close = document.querySelector('#close')


changePassword.addEventListener('click',(e)=>{
    e.preventDefault()

    ventana.style.display = 'block'
    datos.classList.add('blur')
    
})

close.addEventListener('click',(e)=>{
    ventana.style.display='none'
    datos.classList.remove('blur')
})