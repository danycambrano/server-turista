import routerx from 'express-promise-router';
import personalController from '../controllers/personal.controller';


const router=routerx();

router.post('/guardarPersonal',personalController.GuardarPersonal);
router.get('/consultarPersonal',personalController.listarPersonal);
router.get('/consultarUno/:id', personalController.personalUno);
router.delete('/eliminarPersonal/:id',personalController.eliminarPersonal);
router.put('/actualizarPersonal/:id',personalController.actualizarPersonal);

export default router;
