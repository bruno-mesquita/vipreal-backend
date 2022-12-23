import express, { json, type Express } from 'express';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';

import { Http } from "./Http";

export class ExpressAdapter implements Http {
  app: Express;

  constructor() {
    const app = express();
    app.use(json());
    app.use(helmet());
    app.use(cors());
    app.use(compression());
    this.app = app;
  }

  on<I = any, O = any>(method: 'get' | 'post' | 'delete' | 'put', url: string, callback: (input: I) => Promise<O>): void {
    this.app[method](url, async (req, res) => {
      const output = await callback({
        ...req.body,
        ...req.query,
        ...req.params,
      });
      res.json(output);
    })
  }
  listen(port: number): void {
    this.app.listen(port, () => console.log(`Server on ${port}`));
  }
}
