import './config/env';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json({ ok: true });
});

app.listen(process.env.PORT, () => console.log(`Server on ${process.env.PORT}`));
