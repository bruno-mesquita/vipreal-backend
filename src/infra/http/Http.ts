export interface Http {
  on<I = any, O = any>(method: string, url: string, callback: (input: I) => Promise<O>): void;
  listen(port: number): void;
}
