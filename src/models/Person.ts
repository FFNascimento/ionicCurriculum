import { Telephone } from './Telephone';
import { Address } from './Address';
import { Education } from './Education';
import { Work } from './Work';
import { Goals } from './Goals';

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
  email: string;
  education: Array<Education>;
  work: Array<Work>;
  goals: Goals;

  constructor(_name: string, _age: number, _nationality: string,
    _enterprise: string, _role: string, _martial: string, _tel: Telephone,
    _address: Address, _email: string, _edu: Education[], _work: Work[], _goals) {
    this.name = _name;
    this.age = _age;
    this.nationality = _nationality;
    this.enterprise = _enterprise;
    this.role = _role;
    this.martialStatus = _martial;
    this.telephone = _tel;
    this.address = _address;
    this.email = _email;
    this.education = _edu;
    this.work = _work;
    this.goals = _goals;
  }

}
