function qs(element) { 
    return document.querySelector(element) 
} 

let iconError = '<i class="fas fa-times-circle"></i>'

window.addEventListener( 'load' , () => {
    let $email = qs("#email"),
  $emailErrors = qs("#emailErrors"),
  $pass = qs("#password"),
  $passErrors = qs("#passErrors"),
  $form = qs("#form")

  regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;


$email.addEventListener("blur", function () {
    switch (true) {
      case !$email.value.trim():
        $emailErrors.innerHTML = `${iconError} El campo email es obligatorio`;
        break;
  
      case !regExEmail.test($email.value):
        $emailErrors.innerHTML = `${iconError} Debe ingresar un email válido`;
        break;
      default:
        $emailErrors.innerHTML = "";
        break;
    }
  });


  $pass.addEventListener("blur", function () {
    switch (true) {
      case !$pass.value.trim():
        $passErrors.innerHTML = `${iconError} El campo contraseña es obligatorio`;
        break;
  
      default:
        $passErrors.innerHTML = "";
        break;
    }
  });

  $form.addEventListener('submit',function(event){
    let error = false;
    event.preventDefault()
    console.log($form.elements)
    let elementosForm = this.elements
    
    for (let index = 0; index < elementosForm.length-1; index++) {
      if(elementosForm[index].value == ""){
          elementosForm[index].classList.add('is-invalid');
          submitErrors.innerHTML = `${iconError} Los campos seleccionados son obligatorios`;
          error = true;
      }
  }
  
    if(!error){
        console.log('Formulario Enviado');
        $form.submit()
    }
  
  });
})


