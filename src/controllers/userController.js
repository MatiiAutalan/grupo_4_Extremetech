module.exports = {
    index: (req,res) => {
        res.render('userprofile', {
            title:"Cuenta"
        })
    },
    register:(req,res) =>{
        res.render('register', {
            title: "Registro"
        })
    },
    finishBuy:(req,res) =>{
        res.render('finishBuying', {
            title:"Fin de transaccion"
        })
    },
    

}