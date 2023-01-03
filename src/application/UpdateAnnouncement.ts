import type { AnnouncementRepository } from "../../src/domain/repository/AnnouncementRepository";

export class UpdateAnnouncement {
  constructor(private announcementRepository: AnnouncementRepository) {}

  async execute({ announcementId, address, ...input }: Input): Promise<void> {
    const announcement =  await this.announcementRepository.get(announcementId);
    announcement.title = input.title;
    announcement.description = input.description;
    announcement.bedrooms = input.bedrooms;
    announcement.bathrooms = input.bathrooms;
    announcement.forSale = input.forSale;
    announcement.toRent = input.toRent;
    announcement.saleValue = input.saleValue;
    announcement.rentAmount = input.rentAmount;
    announcement.condoPrice = input.condoPrice;
    announcement.title = input.title;
    announcement.photos = input.photos;
    announcement.iptu.singleInstallment = input.singleInstallment;
    announcement.iptu.pricePerPnstallment = input.pricePerPnstallment;
    announcement.address.street = address.street;
    announcement.address.number = address.number;
    announcement.address.state = address.state;
    announcement.address.city = address.city;
    announcement.address.neighborhood = address.neighborhood;
    announcement.address.zipCode = address.zipCode;
    await announcement.address.fillLngAndLnt();
  }
}

type Input = {
  announcementId: string;
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

