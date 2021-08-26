const { getUsers, addUsers } = require("../data/dataBase");
const bcrypt = require('bcryptjs')
module.exports = {
    index: (req,res) => {
        res.render('userProfile', {
            title:"Cuenta"
        })
    },
    register:(req,res) =>{
        res.render('register', {
            title: "Registro"
        })
    },
    userRegister:(req,res) => {
        let lastId = 1;   // Creo una variable con un id , esta  variable representa un contador basicamente

        getUsers.forEach(user => {   // recorro el array de productos buscando un producto
            if(user.id > lastId){    // Si el id del producto es mayor que la variable
                lastId = user.id     //va a valer 1
            }
        });


        let nuevoUsuario = {
            

            id: lastId + 1,  // para crear un nuevo producto , le estamos diciendo que el id que recibe el nuevo producto , va a ser el valor del lastid, osea el ultimo producto que  itero +1
            nombre: req.body.nombre.trim(),  // escribimos el modelo , con el parametro que recibimos por el  objeto body que nos envia la pagina y con el "." estamos entrando en el objeto
            apellido: req.body.apellido.trim(),
            telefono: req.body.telefono.trim(),
            email: req.body.email.trim(),
            password: bcrypt.hashSync(req.body.password.trim()),
            documento: "",
            admin: false,
            image:'user.jpg'
        }

        getUsers.push(nuevoUsuario);   // le estamos metiendo a la variable getproducts que es la que tiene todos los productos el nuevo producto que estamos creando
        
        addUsers(getUsers);  // esta funcion escribe el json  y recibe como parametro la base de datos donde va a ser escrito
        
        res.redirect('/')  // una vez agregado el producto nos redirecciona  a la vista de productos
    },
    finishBuy:(req,res) =>{
        res.render('finishBuying', {
            title:"Fin de transaccion"
        })
    },
    

}