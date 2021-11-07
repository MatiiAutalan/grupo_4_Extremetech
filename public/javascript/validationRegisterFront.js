function qs(element) {
    return document.querySelector(element)
}

let $form =qs('#form') 
let $email = qs('#inputEmail')
let erroresEmail = qs('#erroresEmail') 
let $password = qs('#inputPassword')
let $passwordErrors1 =qs('#erroresPass')
let $password2 = qs('#inputRepeatPassword')
let $passError2 = qs('#passError2')
let $nombre = qs('#inputNombre')
let $nombreError = qs('#erroresNombre')
let $apellido = qs('#inputApellido')
let $apellidoError = qs('#erroresApellido')
let $telefono = qs('#inputTelefono')
let telefonoError = qs('#erroresTel')
let $submitErrors = qs('#submitErrors')
regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
regExPass = /^(?=.*\d)(?=.*[a-z]).{6,12}$/;
let iconError = '<i class="fas fa-times-circle"></i>'
let iconCheck = '<i class="fas fa-check"></i>'
let validationsErrors = false




window.addEventListener('load',()=>{
    $email.addEventListener('blur', function(){
        switch (true) {
            case !$email.value.trim():
                erroresEmail.innerHTML =`${iconError} El email es obligatorio `
                $email.style.border = "3px solid red"
                validationsErrors = true
                break;
                case !regExEmail.test($email.value):
                    erroresEmail.innerHTML = `${iconError} Debe ingresar un email valido `
                    $email.style.border = "3px solid red"
                    validationsErrors = true
                    break;
                default:
                    erroresEmail.innerHTML= ""
                    $email.classList.remove('class')
                    $email.style.border = "3px solid green"
                    validationsErrors = false
                    //erroresEmail.style.color = 'green'
                    
                 
          }
      })
 
  $password.addEventListener('blur', ()=>{
      switch (true) {
          case !$password.value.trim():
            $passwordErrors1.innerHTML= 'Contraseña obligatoria'
            $password.style.border = "3px solid red".
            validationsErrors = true
              break;
              case !regExPass.test($password.value):
                 $passwordErrors1.innerHTML ='La contraseña debe tener: entre 6 o 12 caracteres, al menos una mayúscula, una minúscula y un número';
            $password.style.border = "3px solid red"
            validationsErrors = true
            break
      
          default:
           $passwordErrors1.innerHTML= ""    
            $password.classList.remove('class')
            $password.style.border = "3px solid green"
            validationsErrors = false

              break;
      }
  })

  
  $password2.addEventListener('blur', function(){
      switch (true) {
          case !$password2.value.trim():
              $passError2.innerHTML = `${iconError} Debe repetir su contraseña`
              $password2.style.border = "3px solid red"
              validationsErrors = true
              break;
              case $password2.value !== $password.value:
                
                passError2.innerHTML = `${iconError} Las contraseñas no coinciden`
                $password2.style.border = "3px solid red"
                validationsErrors = true
                break;
          default:
              passError2.innerHTML = ""
              $password2.style.border = "3px solid green"
              validationsErrors = false

              break;
      }
  })



  $nombre.addEventListener('blur',function(){
    switch (true) {
        case $nombre.value.trim().length <= 2 :
            $nombreError.innerHTML = "El nombre debe ser mayor a 2 caracteres"
            validationsErrors = true
            break;
        case !regExAlpha.test($nombre.value) :
            $nombreError.innerHTML = "Debes ingresar un nombre valido"
            validationsErrors = true
              break;
        default:
            $nombreError.innerHTML= ""
            $nombre.style.border = "3px solid green"
            validationsErrors = false
            break;
    } 
})
   $apellido.addEventListener('change',function(){
    switch (true) {
        case $apellido.value.trim().length <= 2 :
            $apellidoError.innerHTML = "El apellido debe ser mayor a 2 caracteres"
            validationsErrors = true
            break;
        case !regExAlpha.test($apellido.value) :
              $apellidoError.innerHTML = "Debes ingresar un apellido valido"
              validationsErrors = true
              break;
        default:
          $apellidoError.innerHTML= ""
          $apellido.style.border = "3px solid green"
          validationsErrors = false
            break;
    } 
}) 
$telefono.addEventListener('change',function(){
    switch (true) {
        case $telefono.value.trim().length <= 10 :
            telefonoError.innerHTML = "Telefono invalido"
            validationsErrors = true
            break;
            default:
          $telefono.value.trim()
          telefonoError.innerHTML= ""
          telefonoError.style.backgroundColor = '#70ff8b'
          validationsErrors = false
            break;
    } 

})
$form.addEventListener('submit',function(event){
    let error = false;
    event.preventDefault()
    console.log($form.elements)
    let elementosForm = $form.elements
    

    for (let index = 0; index < elementosForm.length-1; index++) {
        console.log(elementosForm[index])
      if(elementosForm[index].value == "" && elementosForm[index].name !== "telefono" && elementosForm[index].name !== "apellido"){
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