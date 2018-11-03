import { Router } from 'express';
import Chirps from '../controllers/chirps';

const router = Router();

router
    .get('/', Chirps.all)
    .get('/user/:id', Chirps.allByUser)
    .get('/:id', Chirps.read)
    .put('/', Chirps.update)
    .post('/', Chirps.create)
    .delete('/', Chirps.destroy);

export default router;
