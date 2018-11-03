import { Router } from 'express';
import chirpRouter from './chirps';
import userRouter from './users';

const router = Router();

router.use('/chirps', chirpRouter).use('/users', userRouter);

export default router;
