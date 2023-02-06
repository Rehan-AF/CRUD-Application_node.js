import catchAsync from '../utils/catchAsync.js';
import USER from '../model/userModel.js';
import multer from 'multer';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const diskStorage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, `uploads`);
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
  const { name, email, number, _id, image } = req.body;

  const updateUser = await USER.findByIdAndUpdate(_id, {
    _id: _id,
    name: name,
    email: email,
    number: number,
    image: {
      data: fs.readFileSync('uploads/' + req.file.filename),
      contentType: 'image/png',
    },
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
    image: {
      data: fs.readFileSync('uploads/' + req.file.filename),
      contentType: 'image/png',
    },
  });
  await newUser
    .save()
    .then(() => {
      console.log('image updated successfully');
    })
    .catch((err) => {
      console.log(err, 'image updated failed');
    });
  res.status(201).json({
    status: 'success',
    data: { newUser },
  });
});

export const deleteUser = catchAsync(async (req, res) => {
  const deleteUser = await USER.findByIdAndRemove(req.params.id);
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
