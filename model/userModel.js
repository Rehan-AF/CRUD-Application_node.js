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
  image: {
    data: Buffer,
    contentType: String,
  },
});
const USER = mongoose.model('user', UserModel);

export default USER;
