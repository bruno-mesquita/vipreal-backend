import pgp from 'pg-promise';

import type { Connection } from "./Connection";

export class PgPromiseConnectionAdapter implements Connection {
  pgp: any;

  constructor() {
    this.pgp = pgp()('');
  }

  query(statement: string, params: any): Promise<any> {
		return this.pgp.query(statement, params);
	}

	close() {
		return this.pgp.$pool.end();
	}
}
