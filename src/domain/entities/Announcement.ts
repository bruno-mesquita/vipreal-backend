import { Address } from "./Address";
import { Iptu } from "./Iptu";

export class Announcement {
  static PHOTO_LIMIT = 20;

  id!: string;
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
  iptu: Iptu;
  address: Address;

  constructor(
    title: string,
    description: string,
    bedrooms: number,
    bathrooms: number,
    saleValue: number,
    rentAmount: number,
    condoPrice: number,
    forSale: boolean,
    toRent: boolean,
    iptu: Iptu,
    address: Address,
  ) {
    this.title = title;
    this.condoPrice = condoPrice;
    this.description = description;
    this.saleValue = saleValue;
    this.rentAmount = rentAmount;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.forSale = forSale;
    this.toRent = toRent;
    this.iptu = iptu;
    this.address = address;
    this.photos = []
  }

  addPhoto(photo: string) {
    if(Announcement.PHOTO_LIMIT === this.photos.length) throw new Error('Limite de imagens atingido');
    this.photos.push(photo);
  }
}
