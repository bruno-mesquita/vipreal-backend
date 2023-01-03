export interface Http {
  on<I = unknown, O = unknown>(method: string, url: string, callback: (input: I) => Promise<O>): void;
  listen(port: number): void;
}
