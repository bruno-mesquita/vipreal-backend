import { Iptu } from "../../src/domain/entities/Iptu";

describe('Tests - Iptu', () => {
  it('Should create a Iptu', () => {
    const iptu = new  Iptu(300, 40);
    expect(iptu.singleInstallment).toBe(300);
  });
  it('Should throw Error', () => {
    expect(() => new Iptu(300, 500)).toThrowError(new Error('Preço por parcela não pode ser maior que a parcela unica'));
  });
});
