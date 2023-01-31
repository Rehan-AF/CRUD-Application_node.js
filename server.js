import dotenv from 'dotenv';
import morgan from 'morgan';
import mongoose from 'mongoose';
import app from './app';

dotenv.config({ path: './config.env' });

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.PASSWORD);

const port = process.env.PORT || 8000;
mongoose.set('strictQuery', false);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: false,
  })
  .then((col) => console.log('DATABASE connected successfully'));
mongoose.set('strictQuery', false);
app.listen(port, () => {
  console.log(`listening on ${port}`);
});