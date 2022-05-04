import routerx from 'express-promise-router';
import PersonalController from '../controllers/personal.controller';

const router=routerx();

router.post('/guardarpersonal',PersonalController.GuardarPersonal);

export default router;
