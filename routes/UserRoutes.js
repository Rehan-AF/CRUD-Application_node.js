import { Router } from 'express';
import {
  createUser,
  getAllUser,
  getUser,
  updateUser,
  upload,
  deleteUser,
} from '../controllers/userController.js';

const router = Router();

router.get('/', getAllUser);
router.get('/:id', getUser);
router.post('/', upload.single('image'), createUser);
router.put('/:id', upload.single('image'), updateUser);
router.delete('/:id', deleteUser);

export default router;
