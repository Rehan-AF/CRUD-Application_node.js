import express from 'express';
// eslint-disable-next-line import/extensions
import router from './routes/UserRoutes.js';

const app = express();

app.use(express.json());
app.use('/api/users', router);
export default app;
