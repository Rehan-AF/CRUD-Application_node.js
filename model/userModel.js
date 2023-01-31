import mongoose from 'mongoose';

const UserModel = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'user must have a name'],
  },
  email: {
    type: String,
    require: [true, 'user must have a email'],
  },
  number: {
    type: String,
    require: [true, 'user must have a number'],
  },
});
const USER = mongoose.model('user', UserModel);

export default USER;
