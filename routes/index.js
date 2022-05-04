import routerx from 'express-promise-router';
import PersonalRoutes from './personal.routes';

const router = routerx();

router.use('/personal',PersonalRoutes);

export default router;