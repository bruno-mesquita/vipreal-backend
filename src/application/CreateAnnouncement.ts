import { Address } from "../domain/entity/Address";
import { Announcement } from "../domain/entity/Announcement";
import { Iptu } from "../domain/entity/Iptu";
import type { AnnouncementRepository } from "../domain/repository/AnnouncementRepository";

export class CreateAnnouncement {
  constructor(private announcementRepository: AnnouncementRepository) {}

  async execute(input: Input): Promise<Output> {
    const iptu = new Iptu(input.singleInstallment, input.pricePerPnstallment);
    const address = new Address(
      input.address.street,
      input.address.number,
      input.address.state,
      input.address.city,
      input.address.neighborhood,
      input.address.zipCode,
    );
    await address.fillLngAndLnt();
    const announcement = new Announcement(
      input.title,
      input.description,
      input.bedrooms,
      input.bathrooms,
      input.saleValue,
      input.rentAmount,
      input.condoPrice,
      input.forSale,
      input.toRent,
      iptu,
      address,
    );
    const id = await this.announcementRepository.create(announcement);
    return { id };
  }
}

type Input = {
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

type Output = {
  id: string;
}

