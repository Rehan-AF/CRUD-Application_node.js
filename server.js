import dotenv from 'dotenv';
import morgan from 'morgan';
import mongoose from 'mongoose';
// eslint-disable-next-line import/extensions
import app from './app.js';

dotenv.config({ path: './config.env' });

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}
const port = process.env.PORT || 8000;

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
mongoose.set('strictQuery', false);
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
