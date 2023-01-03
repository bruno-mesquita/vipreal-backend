import { AnnouncementRepositoryMemory } from '../../src/infra/repository/memory/AnnouncementRepositoryMemory';
import { CreateAnnouncement } from '../../src/application/CreateAnnouncement';
import { UpdateAnnouncement } from '../../src/application/UpdateAnnouncement';

describe('Tests UpdateAnnouncement', () => {
  it('Should update a announcement', async () => {
    const announcementRepository = new AnnouncementRepositoryMemory();
    const createAnnouncement = new CreateAnnouncement(announcementRepository);
    const inputs = {
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
    }
    const { id } = await createAnnouncement.execute(inputs);
    const updateAnnouncement = new UpdateAnnouncement(announcementRepository);
    await updateAnnouncement.execute({ announcementId: id, ...inputs, title: 'Casa Completa 1' });
    const announcemnt = await announcementRepository.get(id);
    expect(announcemnt.title).toBe('Casa Completa 1');
  })
})
