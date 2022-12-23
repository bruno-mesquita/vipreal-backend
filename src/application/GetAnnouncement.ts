import type { AnnouncementRepository } from "../../src/domain/repository/AnnouncementRepository";

export class GetAnnouncement {
  constructor(private announcementRepository: AnnouncementRepository) {}

  async execute(input: Input): Promise<Output> {
    const announcement =  await this.announcementRepository.get(input.announcementId);
    return {
      id: announcement.id,
      title: announcement.title,
      description: announcement.description,
      bedrooms: announcement.bedrooms,
      bathrooms: announcement.bathrooms,
      forSale: announcement.forSale,
      toRent: announcement.toRent,
      saleValue: announcement.saleValue,
      rentAmount: announcement.rentAmount,
      condoPrice: announcement.condoPrice,
      photos: announcement.photos,
      singleInstallment: announcement.iptu.singleInstallment,
      pricePerPnstallment: announcement.iptu.pricePerPnstallment,
      address: {
        street: announcement.address.street,
        number: announcement.address.number,
        state: announcement.address.state,
        city: announcement.address.city,
        neighborhood: announcement.address.neighborhood,
        zipCode: announcement.address.zipCode,
      }
    }
  }
}

type Input = {
  announcementId: string;
}

type Output = {
  id: string;
  title: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  forSale: boolean;
  toRent: boolean;
  saleValue: number;
  rentAmount: number;
  condoPrice: number;
  photos: string[];
  singleInstallment: number;
  pricePerPnstallment: number;
  address: {
    street: string;
    number: string;
    state: string;
    city: string;
    neighborhood: string;
    zipCode: string;
  }
}

