import express from 'express';
import path from 'node:path';
import 'dotenv/config';
import 'express-async-errors';

import errorHandler from './app/middlewares/errorHandler';

const server = express();

server.use(express.json());
server.use('/uploads', express.static(path.resolve(__dirname, '..', '/uploads')));
server.use(errorHandler);

export { server };
