window.addEventListener('load',()=>{
    let inputSearch =document.querySelector('#inputSearch')

    let productSearch = Array.from(document.querySelectorAll('.product-item'))
    console.log(productSearch)

    inputSearch.addEventListener('keyup',(e)=>{
        if(e.target.value == inputSearch.value){
            if(e.key === "Escape"){
                e.target.value ="";
            }

            productSearch.forEach(element =>{
                console.log(element)
                if(element.textContent.toLocaleLowerCase().includes(e.target.value)){
                    element.style.display = "block"
                }else{
                    element.style.display = "none"
                }
            })
        }
    })
})