
function qs(element) { 
    return document.querySelector(element) 
} 

let iconError = '<i class="fas fa-times-circle"></i>'

/*var select = document.getElementById('language');
var text = $marca.options[$marca.selectedIndex].value
if (text == "") {
  console.log("el campo esta vacio ")
  
}*/

window.addEventListener( 'load' , () => {
    let $categorias = qs("#categorias"),
  $categoriasErrors = qs("#categoriasErrors"),
  $marca = qs("#marca"),
  $marcaErrors = qs("#marcaErrors"),
  $nameErrors = qs("#nameErrors"),
  $inputName = qs("#inputName"),
  $precio = qs("#precio"),
  $precioErrors = qs ("#precioErrors"),
  $imagen = qs("#imagen"),
  $imagenErrors = qs("#imagenErrors"),
  $descuento = qs("#descuento"),
  $descuentoErrors = qs("#descuentErrors")
  $form = qs("#form"),
  $submitErrors = qs("#submitErrors"),
  $file = qs("#file")
  

  regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
  regExDNI = /^[0-9]{7,8}$/
  regExNumber = /^[0-9]{3,9}$/
  regExNumber2 = /^[0-9]{1,9}$/


  /*var optForm = document.forms["formulario"]["sexo"].selectedIndex;
  if( optForm == null || optForm == 0 ) {
      alert("Debe seleccionar una opción en el campo 'Sexo'");
      return false;					
  }*/



  $inputName.addEventListener('blur', function(){

    switch (true) {
        case !$inputName.value.trim():
          $nameErrors.innerHTML = `${iconError} El campo modelo es obligatorio`;
          $inputName.style.border = "3px solid red"
            
            break;
        case !regExAlpha.test($inputName.value):
          $nameErrors.innerHTML = `${iconError} Ingrese un modelo valido`;
          $inputName.style.border = "3px solid red"
            break; 
        default:
            $nameErrors.innerHTML = ''
            $inputName.removeAttribute('class')
            $inputName.style.border ="3px solid green"
            break;
    }
})





/*$categorias.addEventListener('blur', function () {
    if(!$categorias.value.trim()){
      $categoriasErrors.innerHTML = `${iconError} El campo marca es obligatorio`;
    } else {
      $categoriasErrors.innerHTML = ""
    }
  });*/
  
  
  



  
  
  /*$marca.addEventListener("blur", function () {
    switch (true) {
      case !$marca.value.trim():
        $marcaErrors.innerHTML = `${iconError} El campo marca es obligatorio`;
        break;
  
      default:
        $marcaErrors.innerHTML = "";
        break;
    }
  });*/
 /* $marca.addEventListener('blur', function () {
    if(!$marca.value.trim()){
      $marcaErrors.innerHTML = `${iconError} El campo marca es obligatorio`;
    } else {
      $marcaErrors.innerHTML = ""
    }
  });*/
  
  $precio.addEventListener('blur', ()=>{
    switch (true) {
        case !$precio.value.trim():
          $precioErrors.innerHTML= 'el campo obligatoria'
          $precio.style.border = "3px solid red"
            break;
            case !regExNumber.test($precio.value):
               $precioErrors.innerHTML ='ingrese un precio valido';
          $precio.style.border = "3px solid red"
          break
    
        default:
         $precioErrors.innerHTML= ""    
          $precio.classList.remove('class')
          $precio.style.border = "3px solid green"

            break;
    }
})


 
  
  /*$modelo.addEventListener("blur", function () {
    switch (true) {
      case !$modelo.value.trim():
        $modeloErrors.innerHTML = `${iconError} El campo modelo es obligatorio`;
        break;
  
      case !regExAlpha.test($modelo.value):
        $modeloErrors.innerHTML = `${iconError} Debe ingresar un modelo válido`;
        break;
      default:
        $modeloErrors.innerHTML = "";
        break;
    }
  });*/
 

  
  $descuento.addEventListener('change', ()=>{
    switch (true) {
            case !regExNumber.test($descuento.value):
               $descuentoErrors.innerHTML ='ingrese un descuento valido';
          $descuento.style.border = "3px solid red"
          break
    
        default:
         $descuentoErrors.innerHTML= ""    
          $descuento.style.border = "3px solid green"

            break;
    }
})







  /*$imagen.addEventListener("blur", function(){
    switch (true) {
        case !$imagen.value.trim():
            $imagenErrors.innerHTML = `${iconError} El campo imagen es obligatorio`;
            break;
            default:
                $imagenErrors.innerHTML = "";
                break;
    }
});*/

  $form.addEventListener('submit',function(event){
    let error = false;
    event.preventDefault()
    console.log($form.elements)
    let elementosForm = this.elements
    
    for (let index = 0; index < elementosForm.length-1; index++) {
      if(elementosForm[index].value == "" && elementosForm[index].name !== "color" && elementosForm[index].name !== "brand_id" && elementosForm[index].name !== "category_id" && elementosForm[index].name !== "discount" && elementosForm[index].name !== "description" && elementosForm[index].name !== "product-image" ){
          elementosForm[index].style.border = "3px solid red"
          
          submitErrors.innerHTML = `${iconError} Los campos seleccionados son obligatorios`;
          error = true;
          
      }
      console.log(elementosForm[index])
  }
  
    if(!error){
        console.log('Formulario Enviado');
       /* $form.submit()*/
    }

  
  });
})