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
    },

    listarPersonal: async(req,res,next)=>{
        try{
            const consultar=await models.Personal.find();
            res.json(consultar);
        }catch(err){
            res.status(500),send({
                message:'Ocurrió un error al consultar la BD'
            });
            next(err);
        }
    },

    personalUno: async(req,res,next)=>{
        try{
            const consultarUno=await models.Personal.findById(req.params.id);
            if(!consultarUno){
                res.status(404).send({
                    message: 'El registro en la BD no existe'
                });
            }else{
                res.status(200).json(consultarUno);
            }
        }catch(e){
            res.status(500).send({
                message: 'Error en el servidor de la BD'
            });

            next(e);
        }
    },

    eliminarPersonal: async(req,res,next)=>{
        try{
            const eliminarP=await models.Personal.findByIdAndDelete(req.params.id);
            res.status(200).json(eliminarP);
        }catch(e){
            res.status(500).send({
                message: 'Ocurrrio un error al eliminar en la BD'
            });

            next(e);
        }
    },

    actualizarPersonal: async (req,res,next)=>{
        try{
            const{
                nombre,
                apellidos,
                direccion
            }=req.body;

            const Apersonal={
                nombre,
                apellidos,
                direccion
            };

            const actualizar=await models.Personal.findByIdAndUpdate(req.params.id, Apersonal);
            res.status(200).json(actualizar);
        }catch(e){
            res.status(500).send({
                message: 'Ocurrio un error al actualizar información'
            });
            next(e);
        }
    }
}