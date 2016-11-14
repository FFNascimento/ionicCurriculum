import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Person } from '../models/Person';
import { Telephone } from '../models/Telephone';
import { Address } from '../models/Address';

/*
  Generated class for the PersonalInfo provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PersonalInfo {

  public tel: Telephone = new Telephone('cel', 11971163283);
  public address: Address = new Address('Rua', 'Luiz Flávio de Almeida', 35,
    'JD. Herculano', 'SP', '04920-030');
  public fabricio: Person = new Person('Fabricio Ferreira do Nascimento', 21,
    'brasileiro', 'IBM', 'Front-End Developer', 'Solteiro', this.tel, this.address);

  constructor() { }

  getPersonData() {
    return this.fabricio;
  }

}
