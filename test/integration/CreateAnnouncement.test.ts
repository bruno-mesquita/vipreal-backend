import { AnnouncementRepositoryFake } from '../../src/application/repositories/AnnouncementRepositoryFake';
import { CreateAnnouncement } from '../../src/application/useCases/CreateAnnouncement';

describe('Test CreateAnnouncement', () => {
  it('Should create Announcement', async () => {
    const announcementRepository = new AnnouncementRepositoryFake();
    const createAnnouncement = new CreateAnnouncement(announcementRepository);
    const output = await createAnnouncement.execute({
      title: 'Casa completa',
      description: 'Descripção',
      bathrooms: 0,
      bedrooms: 0,
      condoPrice: 200,
      forSale: false,
      pricePerPnstallment: 20,
      photos: [],
      rentAmount: 300,
      saleValue: 100,
      singleInstallment: 2000,
      toRent: true,
      address: {
        street: 'Rua tal',
        number: '30',
        state: 'SP',
        city: 'Caragua',
        neighborhood: 'Golfinho',
        zipCode: '12237821',
      }
    });
    expect(output).toHaveProperty('id');
  })
})
