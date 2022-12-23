import './config/env';
import express, { json } from 'express';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';

const app = express();
app.use(json());
app.use(helmet());
app.use(cors());
app.use(compression());

app.get('/', (req, res) => {
  return res.json({ ok: true });
});

app.listen(process.env.PORT, () => console.log(`Server on ${process.env.PORT}`));
