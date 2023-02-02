import express from 'express';
import router from './routes/UserRoutes.js';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import cors from 'cors';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(cors());

app.use('/upload', express.static(path.join(__dirname, '/upload')));
app.use(express.json());
app.use('/api/users', router);

export default app;
