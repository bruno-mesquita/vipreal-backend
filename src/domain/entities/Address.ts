import axios from 'axios';

export class Address {
  street: string;
  number: string;
  state: string;
  city: string;
  neighborhood: string;
  zipCode: string;
  lnt?: string;
  lng?: string;

  constructor(
    street: string,
    number: string,
    state: string,
    city: string,
    neighborhood: string,
    zipCode: string,
    lnt?: string,
    lng?: string,
  ) {
    this.street = street;
    this.number = number;
    this.state = state;
    this.city = city;
    this.neighborhood = neighborhood;
    this.zipCode = zipCode;
    this.lnt = lnt;
    this.lng = lng;
  }

  async fillLngAndLnt() {
    const { data } = await axios(`https://brasilapi.com.br/api/cep/v2/${this.zipCode}`);
    this.lng = data.location.coordinates.longitude;
    this.lnt = data.location.coordinates.latitude;
  }
}
