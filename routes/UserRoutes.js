import { Router } from 'express';
import {
  createUser,
  getAllUser,
  getUser,
} from '../controllers/userController.js';

const router = Router();

router.get('/', getAllUser);
router.get('/:id', getUser);
router.post('/', createUser);
export default router;
