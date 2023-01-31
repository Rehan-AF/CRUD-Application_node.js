import fs from 'fs';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import USER from '../model/userModel.js';

dotenv.config({ path: './config.env' });

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);
mongoose.set('strictQuery', false);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connetion to database successfull');
  });

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/userData.json`, 'utf-8')
);

const uploadUserDataDB = async () => {
  try {
    await USER.create(users);
    console.log('data successfully uploaded');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteUserDataDB = async () => {
  try {
    await USER.deleteMany();
    console.log('user data deleted');
  } catch {
    console.log('failed to delete user data');
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  uploadUserDataDB();
} else if (process.argv[2] === '--delete') {
  deleteUserDataDB();
}
