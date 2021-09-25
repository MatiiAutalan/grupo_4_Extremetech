const db = require('../database/models')

module.exports = {
    formAgregar:(req,res) =>{

        db.Product.findAll({
            include: [{
                association: "category"
            }]
        }
        )
        .then( category =>{
            res.render('cargaProducts', {
                title:"carga-productos",
                category
            })}
        )
    },


    agregarProducto:(req,res) => {
        let lastId = 1;   // Creo una variable con un id , esta  variable representa un contador basicamente

        getProducts.forEach(producto => {   // recorro el array de productos buscando un producto
            if(producto.id > lastId){    // Si el id del producto es mayor que la variable
                lastId = producto.id     //va a valer 1
            }
        });

        let arrayImages = [];
        if(req.files){
            req.files.forEach(imagen => {
                arrayImages.push(imagen.filename)
            })
        }

        let nuevoProducto = {
            

            id: lastId + 1,  // para crear un nuevo producto , le estamos diciendo que el id que recibe el nuevo producto , va a ser el valor del lastid, osea el ultimo producto que  itero +1
            modelo: req.body.modelo.trim(),  // escribimos el modelo , con el parametro que recibimos por el  objeto body que nos envia la pagina y con el "." estamos entrando en el objeto
            marca: req.body.marca.trim(),
            precio: req.body.precio.trim(),
            categorias: req.body.categorias.trim(),
            discount: req.body.discount.trim(),
            descripcion: req.body.descripcion,
            image: arrayImages.length > 0 ? arrayImages : ['default.png']
        }

        

        getProducts.push(nuevoProducto);   // le estamos metiendo a la variable getproducts que es la que tiene todos los productos el nuevo producto que estamos creando
        
        addProduct(getProducts);  // esta funcion escribe el json  y recibe como parametro la base de datos donde va a ser escrito
        
        res.redirect('/products')  // una vez agregado el producto nos redirecciona  a la vista de productos
        
    },
    listProducts:(req,res) =>{
        db.Product.findAll()
        .then(products => {
            return res.render('editProduct',{
                title: 'Edicion de productos',
                products
            })
        })
    },
    editForm:(req,res) =>{
        let producto = getProducts.find(producto => {       // Creamos una variable de un producto donde nos guarde el objeto que recibimos por la url que coincida con el id de nuestra base de datos
            return producto.id === +req.params.id
        })

        res.render('editForm', {
            title:"Edicion del producto",
            producto
        })
    },
    editProduct: (req,res) => {
      let {modelo, marca, precio , categorias , discount,descripcion} = req.body  // esto es un destructuring del objeto body , donde traemos toda la info de los campos que vamos a editar
       
       let arrayImages = [];
        if(req.files){
            req.files.forEach(imagen => {
                arrayImages.push(imagen.filename)
            })
        } 

        getProducts.forEach(producto => {
            if(producto.id === +req.params.id){   // aca le decimos que si el product.id que recibimos por parametro coincide con el producto que edite los campos con el objeto que recibimos por el form
                producto.modelo = modelo.trim()
                producto.marca = marca.trim()
                producto.precio = precio.trim()
                producto.categorias = categorias.trim()
                producto.discount = discount.trim()
                producto.descripcion = descripcion.trim()
                producto.image = arrayImages.length > 0 ? arrayImages : producto.image
          }
        })
        addProduct(getProducts)
      res.redirect('/')
       
      //res.send(req.file) 
    },

    deleteProduct : (req, res) => {
        getProducts.forEach(producto => {
            if (producto.id === +req.params.id) {
                let productToDelete = getProducts.indexOf(producto);
                getProducts.splice(productToDelete, 1)
            }
        })
        
        addProduct(getProducts);

        res.redirect('/admin/index')
    },
    listUsers:(req,res) =>
    {
        db.User.findAll()
        .then(users => {
            return res.render('listUsers',{
                title: 'Lista de usuarios',
                users
            })
        })
    },
    
    vistaEdit:(req,res) =>{
        let users = getUsers.find(user => {       // Creamos una variable de un producto donde nos guarde el objeto que recibimos por la url que coincida con el id de nuestra base de datos
            return user.id === +req.params.id
        })

        res.render('editUser', {
            title:"Edicion del usuario",
            users
        })
    },
    editUser: (req,res) => {
        let {nombre, apellido, telefono , email ,password, documento, admin, image} = req.body  // esto es un destructuring del objeto body , donde traemos toda la info de los campos que vamos a editar
         
  
          getUsers.forEach(producto => {
              if(producto.id === +req.params.id){   // aca le decimos que si el product.id que recibimos por parametro coincide con el producto que edite los campos con el objeto que recibimos por el form
                  producto.nombre = nombre
                  producto.apellido = apellido
                  producto.email = email
                  producto.password = password
                  producto.documento = documento
                  producto.telefono = telefono
                  producto.admin = admin
                  producto.image = req.file ? req.file.filename : producto.image
                  
            }
          })
          addUsers(getUsers)
        res.redirect('/admin/users')
         
        //res.send(req.file) 
      },
      deleteUser : (req, res) => {
        getUsers.forEach(user => {
            if (user.id === +req.params.id) {
                let userToDelete = getUsers.indexOf(user);
                getUsers.splice(userToDelete, 1)
            }
        })
        
        addUsers(getUsers);

        res.redirect('/admin/index')
    },
}