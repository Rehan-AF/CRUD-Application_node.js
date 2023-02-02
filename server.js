import dotenv from 'dotenv';
import morgan from 'morgan';
import mongoose from 'mongoose';
import app from './app.js';

dotenv.config({ path: './config.env' });

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connetion to database successfull');
  });
mongoose.set('strictQuery', false);
app.listen();
