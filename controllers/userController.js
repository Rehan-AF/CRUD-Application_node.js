import catchAsync from '../utils/catchAsync.js';
import USER from '../model/userModel.js';

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
    res.status(404).json({ message: 'no user found' });
  }
  res.status(200).json({
    status: 'success',
    data: { user },
  });
});
export const createUser = catchAsync(async (req, res) => {
  const newUser = await USER.create(req.body);
  res.status(201).json({
    status: 'success',
    data: { newUser },
  });
});

export const deleteUser = catchAsync(async (req, res) => {
  const deleteUser = await USER.deleteById(req.params.id);
  res.status(204).json({
    status: 'success',
    data: null,
  });
});
