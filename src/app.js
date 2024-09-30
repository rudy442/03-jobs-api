import 'express-async-errors';
import express from 'express';
const app = express();
import errorHandler from './middlewares/error-handler.js';
import notFound from './middlewares/not-found.middleware.js';
import connectDB from './config/db.config.js';
import authenticateUser from './middlewares/auth.middleware.js';

connectDB();

app.use(express.json());

import { auth } from './features/auth/index.js';
import { jobs } from './features/jobs/index.js';

app.use('/api/v1/auth', auth);
app.use('/api/v1/jobs', authenticateUser, jobs);

app.use(notFound);
app.use(errorHandler);

export default app;
