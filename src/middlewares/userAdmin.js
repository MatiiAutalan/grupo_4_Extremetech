module.exports = function userSession(req,res,next){
    if(req.session.user.rol == true){
        next()
    }else{
        res.redirect('/')
    }
}