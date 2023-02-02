import { Router } from 'express';
import {
  createUser,
  getAllUser,
  getUser,
  updateUser,
  upload,
} from '../controllers/userController.js';
import USER from '../model/userModel.js';

const router = Router();

router.get('/', getAllUser);
router.get('/:id', getUser);
router.post('/', upload.single('image'), createUser);
router.put('/:id', upload.single('image'), updateUser);

// router.post('/upload', upload.single('image'), async (req, res) => {
//   try {
//     const imagePath = req.file.filename;
//     const data = new USER({
//       image: imagePath,
//     });
//     await data.save();
//     res.status(201).send({
//       message: 'Image saved successfully',
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'fail',
//       message: 'error',
//     });
//   }
// });
export default router;
