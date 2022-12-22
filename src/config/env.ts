import dotenv from 'dotenv';
import { resolve } from 'node:path';

dotenv.config({
  debug: process.env.NODE_ENV === 'development',
  path: resolve(__dirname, '..', '..', `.env.${process.env.NODE_ENV}`),
});
