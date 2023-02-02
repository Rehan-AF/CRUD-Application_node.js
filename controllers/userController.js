import catchAsync from '../utils/catchAsync.js';
import USER from '../model/userModel.js';
import multer from 'multer';

const diskStorage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage: diskStorage });

export const getAllUser = catchAsync(async (req, res) => {
  const users = await USER.find();
  res.status(200).json({
    status: 'success',
    result: users.length,
    data: { users },
  });
});
export const getUser = catchAsync(async (req, res) => {
  console.log(req.params.id);
  const user = await USER.findById(req.params.id);
  if (!user) {
    res.status(404).json({
      status: 'failed',
      message: 'no user found',
    });
  }
  res.status(200).json({
    status: 'success',
    data: { user },
  });
});
export const updateUser = catchAsync(async (req, res) => {
  const { name, email, number, image } = req.body;
  const { id } = req.params;
  console.log(id);
  const updateUser = await USER.findByIdAndUpdate(id, {
    name: name,
    email: email,
    number: number,
    image: image,
  });
  await updateUser.save();
  if (!updateUser) {
    return res.status(404).json({
      status: 'user not found',
      message: 'cannot find user by this id',
    });
  } else {
    return res.status(201).json({
      message: 'upated successfully',
    });
  }
});
export const createUser = catchAsync(async (req, res) => {
  const { name, email, number } = req.body;
  const newUser = new USER({
    name: name,
    email: email,
    number: number,
    image: req.file.filename,
  });
  await newUser.save();
  res.status(201).json({
    status: 'success',
    data: { newUser },
  });
});

export const deleteUser = catchAsync(async (req, res) => {
  const deleteUser = await USER.deleteById(req.params.id);
  if (!deleteUser) {
    return res.status(404).json({
      status: 'failed',
      message: 'User not found',
    });
  }
  res.status(204).json({
    status: 'success',
    data: null,
  });
});
