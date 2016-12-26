function AllowCrossDomain(){
    this.permisos = function(req,res,next){
        //Solo para un servidor
        //res.header('Acces-Control-Allow-Origin', 'http://localhost:4200');
        res.header('Acces-Control-Allow-Origin', '*');
        res.header('Acces-Control-Allow-Headers', 'Content-Type');
        res.header('Acces-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        next();
    }
}

module.exports = new AllowCrossDomain();