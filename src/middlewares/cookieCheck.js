module.exports = function(req,res,next){
    if(req.cookies.cookieTech){
        req.session.user = req.cookies.cookieTech;
        next()
    }else{
        next()
    }
}