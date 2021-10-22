function qs(element) { 
    return document.querySelector(element) 
} 

let iconError = '<i class="fas fa-times-circle"></i>';

window.addEventListener( 'load' , () => {
    let $inputName = qs('#first_name'),
    $nameErrors = qs('#nameErrors'),
    $inputLastname = qs('#last_name'),
    $lastnameErrors = qs('#lastnameErrors'),
    $dni = qs('#dni'),
    $dniErrors = qs('#dniErrors'),
    $phone = qs('#phone'),
    $phoneErrors = qs('#phoneErrors'),
    $address= qs('#address')
    $addressErrors = qs('addressErrors'),
    $cp = qs('#cp'),
    $cpErrors = qs('#cpErrors'),
    $file = qs('#file'),
    $fileErrors = qs('#fileErrors'),
    $form = qs('#form'),
    

    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
    regExDNI = /^[0-9]{7,8}$/,
    regExphone = /^[0-9]{10,12}$/,
    regExpCp = /^[0-9]{4,5}$/,
    
    $inputName.addEventListener('change', function(){
        console.log($inputName.value.trim())
        switch (true) {
            case !$inputName.value.trim():
                $nameErrors.innerHTML = `${iconError} El campo nombre es obligatorio`
                break;
            case !regExAlpha.test($inputName.value):
                $nameErrors.innerHTML = `${iconError} Ingresa un nombre válido`
                break;    
            default:
                $nameErrors.innerHTML = ""
                break;
        }
    })

    $inputLastname.addEventListener('change', function(){
        console.log($inputLastname.value.trim())
        switch (true) {
            case !$inputLastname.value.trim():
                $lastnameErrors.innerHTML = `${iconError} El campo apellido es obligatorio`
                
                break;
            case !regExAlpha.test($inputLastname.value):
                $lastnameErrors.innerHTML = `${iconError} Ingresa un apellido válido`
                
                break;    
            default:
                $lastnameErrors.innerHTML = ""
                break;
        }
    })

    $dni.addEventListener('change', function(){
        switch (true) {
            case !regExDNI.test($dni.value):
                $dniErrors.innerHTML = `${iconError} Ingresa un DNI válido`
                break;    
            default:
                $dniErrors.innerHTML = ""
                break;
        }
    })

    $cp.addEventListener('change', function(){
        switch (true) {
            case !regExCp.test($cp.value):
                $cpErrors.innerHTML = `${iconError} Ingresa un codigo postal válido`
                break;    
            default:
                $cpErrors.innerHTML = ""
                break;
        }
    })

    $phone.addEventListener('change', function(){                                                                                                                                
        switch (true) {
            case !regExphone.test($phone.value):
                $phoneErrors.innerHTML = `${iconError} Ingresa un telefono válido`
                break;    
            default:
                $phoneErrors.innerHTML = ""
                break;                                                                                                                                                                             
        }
    })

    $file.addEventListener('change', 
    function fileValidation(){
        let filePath = $file.value,
            allowefExtensions = /(.jpg|.jpeg|.png)$/i //Extensiones permitidas
        if(!allowefExtensions.exec(filePath)){ //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
            $fileErrors.innerHTML = `${iconError} Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png)`;
            $file.value = '';
            $imgPreview.innerHTML = '';
            return false;
        }else{
            console.log($file.files);
            if($file.files && $file.files[0]){
                let reader = new FileReader();
                reader.onload = function(e){
                    $imgPreview.innerHTML = '<img src="' + e.target.result +'"/>';
                };
                reader.readAsDataURL($file.files[0]);
                $fileErrors.innerHTML = '';
                $file.classList.remove('is-invalid')
            }
        }
    });

    $form.addEventListener('submit',function(event){
        let error = false;
        event.preventDefault()
        console.log($form.elements)
        let elementosForm = this.elements
        
        for (let index = 0; index < elementosForm.length-1; index++) {
          if(elementosForm[index].value == "" && elementosForm[index].name !== "pc" && elementosForm[index].name !== "image" && elementosForm[index].name !== "address" && elementosForm[index].name !== "telefono" && elementosForm[index].name !== "dni"){
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


