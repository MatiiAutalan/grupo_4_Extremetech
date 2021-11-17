
function qs(element) { 
  return document.querySelector(element) 
} 

let iconError = '<i class="fas fa-times-circle"></i>'
let validationsErrors = false

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
  $descuentoErrors = qs("#descuentoErrors")
  $form = qs("#form"),
  $submitErrors = qs("#submitErrors"),
  $file = qs("#file"),
  $fileErrors = qs('#fileErrors'),
  $imgPreview = qs('#img-preview')
  
  regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
  regExDNI = /^[0-9]{7,8}$/
  regExNumber = /^[0-9]{3,9}$/
  regExNumber2 = /^[0-9]{1,9}$/
  regExNumberrr = /^[0-9,$]*$/
  
  $inputName.addEventListener('blur', function(){
    switch (true) {
      case !$inputName.value.trim():
      $nameErrors.innerHTML = `${iconError} El campo modelo es obligatorio`;
      $inputName.style.border = "3px solid red"
      validationsErrors = true;
      
      break;
      case !regExAlpha.test($inputName.value):
      $nameErrors.innerHTML = `${iconError} Ingrese un modelo valido`;
      $inputName.style.border = "3px solid red"
      validationsErrors = true;
      break; 
      default:
      $nameErrors.innerHTML = ''
      $inputName.removeAttribute('class')
      $inputName.style.border ="3px solid green"
      validationsErrors = false;
      break;
    }
  })
  
  $categorias.addEventListener('blur', function(){
    if(!$categorias.value.trim()){
      $categoriasErrors.innerHTML = `${iconError} La categoria es obligatoria`;
      $categorias.style.border = "3px solid red"
      validationsErrors = true;
    }else {
      
      $categorias.style.border ="3px solid green"
      $categoriasErrors.innerHTML = ''
      validationsErrors = false;
    }
  })
  $marca.addEventListener('blur', function(){
    if(!$marca.value.trim()){
      $marcaErrors.innerHTML = `${iconError} La marca es obligatoria`;
      $marca.style.border = "3px solid red"
      validationsErrors = true;
    }else {
      
      $marca.style.border ="3px solid green"
      $marcaErrors.innerHTML = ''
      validationsErrors = false;
    }
  })
  
  $precio.addEventListener('blur', ()=>{
    switch (true) {
      case !$precio.value.trim():
      $precioErrors.innerHTML= `${iconError} El precio es obligatorio`
      $precio.style.border = "3px solid red"
      validationsErrors = true;
      break;
      case !regExNumber.test($precio.value):
      $precioErrors.innerHTML ='ingrese un precio valido';
      $precio.style.border = "3px solid red"
      validationsErrors = true;
      break
      
      default:
      $precioErrors.innerHTML= ""    
      $precio.style.border = "3px solid green"
      validationsErrors = false;
      
      break;
    }
  })
  
  $descuento.addEventListener('change', ()=>{
    switch (true) {
      case !regExNumberrr.test($descuento.value):
      $descuentoErrors.innerHTML =`${iconError} Ingrese un descuento valido`;
      $descuento.style.border = "3px solid red"
      validationsErrors = true;
      break
      
      default:
      $descuentoErrors.innerHTML= ""    
      $descuento.style.border = "3px solid green"
      validationsErrors = false;
      
      break;
    }
  })
  
  $file.addEventListener('change', 
  function fileValidation(){
    let filePath = $file.value, //Capturo el valor del input
    allowefExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i //Extensiones permitidas
    if(!allowefExtensions.exec(filePath)){ //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
      $fileErrors.innerHTML = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)';
      $file.value = '';
      $imgPreview.innerHTML = '';
      validationsErrors = true;
      return false;
    }else{
      // Image preview 
      console.log($file.files);
      if($file.files && $file.files[0]){
        let reader = new FileReader();
        reader.onload = function(e){
          $imgPreview.innerHTML = '<img src="' + e.target.result +'"/>';
        };
        reader.readAsDataURL($file.files[0]);
        $fileErrors.innerHTML = '';
        $file.classList.remove('is-invalid')
        validationsErrors = false;
      }
    }    
  })
  
  $form.addEventListener('submit',function(event){
    let error = false;
    event.preventDefault()
    //console.log($form.elements)
    let elementosForm = this.elements
    
    for (let index = 0; index < elementosForm.length-1; index++) {
      if(elementosForm[index].value == "" && elementosForm[index].name !== "color" && elementosForm[index].name !== "discount" && elementosForm[index].name !== "description" && elementosForm[index].name !== "product-image" ){
        elementosForm[index].style.border = "3px solid red"
        
        submitErrors.innerHTML = `${iconError} Los campos seleccionados son obligatorios`;
        error = true;
        
      }
      //console.log(elementosForm[index])
    }
    
    if(!error && !validationsErrors){
      submitErrors.innerHTML = ""
      console.log('Formulario Enviado');
      $form.submit()
    }
    
    
  });
})