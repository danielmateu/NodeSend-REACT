const Enlaces = require('../models/enlace')
const shortid = require('shortid');


exports.nuevoEnlace = async(req, res, next) => {
    //Revisar si hay errores

    //Crear un objeto de enlace

    
    const {nombre_original, password} = req.body
    
    const enlace = new Enlaces();
    enlace.url = shortid.generate()
    enlace.nombre = shortid.generate()
    enlace.nombre_original = nombre_original
    enlace.password = password
    
    // Si el usuario está autenticado
    

    //Almacenar en la DB
    try {
        await enlace.save()
        res.json({msg: `${enlace.url}`})
        return next()
    } catch (error) {
        console.log(error);
    }
}