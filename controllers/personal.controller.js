import models from '../models';

export default{
    GuardarPersonal: async(req, res, next)=>{
        try{
            const{
                nombre,
                apellidos,
                direccion
            }=req.body;

            const personal=new models.Personal({
                nombre,apellidos,direccion
            });

            const registro=await personal.save();
            res.status(200).json(registro);

        }catch(err){
            res.status(500).send({
                message: 'Ocurrio un error en la BD'
            })
            next(e);
        }
    }
}