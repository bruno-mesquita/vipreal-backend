export class Iptu {
  singleInstallment: number;
  pricePerPnstallment: number;

  constructor(singleInstallment: number, pricePerPnstallment: number) {
    if(pricePerPnstallment > singleInstallment) throw new Error('Preço por parcela não pode ser maior que a parcela unica');
    this.singleInstallment = singleInstallment;
    this.pricePerPnstallment = pricePerPnstallment;
  }
}
