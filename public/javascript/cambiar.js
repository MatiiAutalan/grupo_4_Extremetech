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

function qs(element) {
    return document.querySelector(element)
}

let $form =qs('#formNewPassword')
let $passNew = qs('#newpassword')
let $repeatPassNew = qs('#repeat')
let $errorPass =qs('#errorPass')
regExPass = /^(?=.*\d)(?=.*[a-z]).{6,12}$/;
let iconError = '<i class="fas fa-times-circle"></i>'
let iconCheck = '<i class="fas fa-check"></i>'
let validationsErrors = false


window.addEventListener('load',()=>{
    $passNew.addEventListener('blur',()=>{
        switch (true) {
            case !$passNew.value.trim():
              //$passNewErrors1.innerHTML= 'Contraseña obligatoria'
              $passNew.style.border = "3px solid red".
              validationsErrors = true
                break;
                case !regExPass.test($passNew.value):
                   //$passNewErrors1.innerHTML ='La contraseña debe tener: entre 6 o 12 caracteres, al menos una mayúscula, una minúscula y un número';
              $passNew.style.border = "3px solid red"
              validationsErrors = true
              break
        
            default:
             //$passNewErrors1.innerHTML= ""    
              $passNew.classList.remove('class')
              $passNew.style.border = "3px solid green"
              validationsErrors = false
  
                break;
        }
    })
    $repeatPassNew.addEventListener('blur', function(){
        switch (true) {
            case !$repeatPassNew.value.trim():
                $errorPass.innerHTML = `${iconError} Debe repetir su contraseña`
                $repeatPassNew.style.border = "3px solid red"
                validationsErrors = true
                break;
                case $repeatPassNew.value !== $passNew.value:
                  
                  $errorPass.innerHTML = `${iconError} Las contraseñas no coinciden`
                  $repeatPassNew.style.border = "3px solid red"
                  validationsErrors = true
                  break;
            default:
                $errorPass.innerHTML = ""
                $repeatPassNew.style.border = "3px solid green"
                validationsErrors = false
  
                break;
        }
    })
    $form.addEventListener('submit',function(event){
        let error = false;
        event.preventDefault()
        console.log($form.elements)
        let elementosForm = $form.elements
        
    
        for (let index = 0; index < elementosForm.length-2; index++) {
            console.log(elementosForm[index])
          if(elementosForm[index].value == "" && elementosForm[index].name !== "email"){
              elementosForm[index].classList.add('is-invalid');
              
            error = true
          } 
      }
    
        if(error == false && !validationsErrors){
            console.log('Formulario Enviado');
            $form.submit()
        }
    
      })
})