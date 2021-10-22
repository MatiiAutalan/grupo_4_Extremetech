function qs(element) {
    return document.querySelector(element)
}

let $form =qs('#form') 
let $email = qs('#email')
let erroresEmail = qs('#erroresEmail') 
let $password = qs('#password')
let passwordErrors1 =qs('#erroresPass')
let $password2 = qs('#repeatPassword')
let passError2 = qs('#passError2')
let $nombre = qs('#inputNombre')
let nombreError = qs('#erroresNombre')
let $apellido = qs('#apellido')
let apellidoError = qs('#erroresApellido')
let $telefono = qs('#telefono')
let telefonoError = qs('#erroresTel')
let $submitErrors = qs('#submitErrors')
regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
regExPass = /^(?=.*\d)(?=.*[a-z]).{6,12}$/;
let iconError = '<i class="fas fa-times-circle"></i>'
let iconCheck = '<i class="fas fa-check"></i>'





window.addEventListener('load',()=>{
  $email.addEventListener('blur',function(){
      switch(true){
          case !$email.value.trim():
            erroresEmail.innerHTML = `${iconError} El email es obligatorio `
            
            //$email.style.backgroundColor = 'red'
            //emailErrors.push ="asdasdasdas"
              console.log('El email es obligatorio')
              
              //console.log(emailErrors)
              break;
            case !regExEmail.test($email.value):
                erroresEmail.innerHTML = `${iconError} Debe ingresar un email valido `
                console.log('debes poner un email valido')
                break;
            default:
                erroresEmail.innerHTML= ""
                //erroresEmail.style.color = 'green'
                $email.style.backgroundColor ='#70ff8b'
             
      }
  })

   $password.addEventListener('blur',function(){
     switch(true){
         case !$password.value.trim():
             //passwordErrors.push = 'La contraseña es obligatoria'
             passwordErrors1.innerHTML = 'La contraseña es obligatoria'
             break;
        case !regExPass.test($password.value):
            //passwordErrors.push = 'La contraseña debe tener: entre 6 o 12 caracteres, al menos una mayúscula, una minúscula y un número';
            passwordErrors1.innerHTML ='La contraseña debe tener: entre 6 o 12 caracteres, al menos una mayúscula, una minúscula y un número';
            break
        default:
            $password.style.backgroundColor = '#70ff8b'
            passwordErrors1.innerHTML =""
            break;
     }
  })

  $password2.addEventListener('blur',()=>{
      switch (true) {
          case !$password2.value.trim() :
              
              passError2.innerHTML = "Reingresa tu contraseña"
              break;
            case $password2.value !== $password.value:
                
                passError2.innerHTML = 'Las contraseñas no coinciden'
                break;
      
          default:
              $password2.style.backgroundColor = '#70ff8b'
              
              passError2.innerHTML = ''
              break;
      }
  }) 

  $nombre.addEventListener('change',function(){
    switch (true) {
        case $nombre.value.trim().length <= 2 :
            apellidoError.innerHTML = "El apellido debe ser mayor a 2 caracteres"
            break;
        case !regExAlpha.test($nombre.value) :
              apellidoError.innerHTML = "Debes ingresar un apellido valido"
              break;
        default:
          apellidoError.innerHTML= ""
          apellidoError.style.backgroundColor = '#70ff8b'
            break;
    } 
})
  $apellido.addEventListener('change',function(){
    switch (true) {
        case $apellido.value.trim().length <= 2 :
            apellidoError.innerHTML = "El apellido debe ser mayor a 2 caracteres"
            break;
        case !regExAlpha.test($apellido.value) :
              apellidoError.innerHTML = "Debes ingresar un apellido valido"
              break;
        default:
          apellidoError.innerHTML= ""
          apellidoError.style.backgroundColor = '#70ff8b'
            break;
    } 
})
$telefono.addEventListener('change',function(){
    switch (true) {
        case $telefono.value.trim().length <= 10 :
            telefonoError.innerHTML = "Telefono invalido"
            break;
            default:
          $telefono.value.trim()
          telefonoError.innerHTML= ""
          telefonoError.style.backgroundColor = '#70ff8b'
            break;
    } 

})
$form.addEventListener('submit',function(event){
    let error = false;
    event.preventDefault()
    console.log($form.elements)
     let elementosForm = this.elements
     /* if (elementosForm[1].value.length < 6) {
         error = true
     } else { */
         
         for (let index = 0; index < elementosForm.length-1; index++) {
           if(elementosForm[index].value == ""  && elementosForm[index].name !== "apellido"  && elementosForm[index].name !== "telefono"){
               elementosForm[index].classList.add('is-invalid');
               console.log(elementosForm[index].value)
               $submitErrors.innerHTML = `${iconError} Los campos seleccionados son obligatorios`;
               error = true;
           }
       }
    
     //}

  
    if(!error){
        console.log('Formulario Enviado');
        //$form.submit()
    }
  
  });

})