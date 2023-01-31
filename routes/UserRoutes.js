import { Router } from 'express';
// eslint-disable-next-line import/extensions
import { getAllUser, getUser } from '../controllers/userController.js';

const router = Router();

router.get('/', getAllUser);
router.get('/:id', getUser);

export default router;
