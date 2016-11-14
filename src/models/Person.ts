import { Telephone } from './Telephone';
import { Address } from './Address';

export class Person {
  // Attributes
  name: string;
  age: number;
  nationality: string;
  enterprise: string;
  role: string;
  martialStatus: string;
  telephone: Telephone;
  address: Address;

  constructor(_name: string, _age: number, _nationality: string,
    _enterprise: string, _role: string, _martial: string, _tel: Telephone,
    _address: Address) {
    this.name = _name;
    this.age = _age;
    this.nationality = _nationality;
    this.enterprise = _enterprise;
    this.role = _role;
    this.martialStatus = _martial;
    this.telephone = _tel;
    this.address = _address;
  }

}
