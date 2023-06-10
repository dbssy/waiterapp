import express from 'express';
import path from 'node:path';
import http from 'node:http';
import { Server } from 'socket.io';
import 'dotenv/config';
import 'express-async-errors';

import errorHandler from './app/middlewares/errorHandler';

import { routes } from './routes';

const app = express();
const server = http.createServer(app);
export const io = new Server(server);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  next();
});

app.use(express.json());
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);
app.use(errorHandler);

export { server };
