import './config/env';
import { ExpressAdapter } from './infra/http/ExpressAdapter';

const app = new ExpressAdapter();
app.on('get', '/', () => Promise.resolve(({ message: 'ok' })))
app.listen(Number(process.env.PORT));
