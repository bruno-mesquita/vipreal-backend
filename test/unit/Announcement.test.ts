import { Address } from "../../src/domain/entities/Address";
import { Announcement } from "../../src/domain/entities/Announcement";
import { Iptu } from "../../src/domain/entities/Iptu";

describe('Tests - Announcement', () => {
  it('Should create a Announcement', () => {
    const iptu = new  Iptu(300, 40);
    const address = new Address('Rua tal', '30', 'SP', 'Caragua', 'Golfinho', '1132323', '2332', '23232');
    const announcement = new Announcement('Casa completa', 'Descripção', 0, 0, 100000, 500, 300, true, false, iptu, address);
    expect(announcement.title).toBe('Casa completa');
    expect(announcement.description === 'Descripção');
    expect(announcement.rentAmount === 100000);
  });
  it('Should create a Announcement with two bedrooms and two bathrooms', () => {
    const iptu = new  Iptu(300, 40);
    const address = new Address('Rua tal', '30', 'SP', 'Caragua', 'Golfinho', '1132323', '2332', '23232');
    const announcement = new Announcement('Casa completa', 'Descripção', 2, 2, 100000, 500, 300, true, false, iptu, address);
    expect(announcement.title).toBe('Casa completa');
    expect(announcement.description === 'Descripção');
    expect(announcement.rentAmount === 100000);
    expect(announcement.bedrooms === 2);
    expect(announcement.bathrooms === 2);
  });
});
