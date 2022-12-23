import { Address } from "../../src/domain/entities/Address";

describe('Tests - Address', () => {
  it('Should create a Address', () => {
    const address = new Address('Rua tal', '30', 'SP', 'Caragua', 'Golfinho', '1132323', '2332', '23232');
  });
});
