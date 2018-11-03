import { Router } from 'express';
import Users from '../controllers/users';

const router = Router();

router
    .get('/', Users.all)
    .get('/:id', Users.read)
    .put('/', Users.update)
    .post('/', Users.create)
    .delete('/', Users.destroy);

export default router;
