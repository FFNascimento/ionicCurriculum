import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Person } from '../models/Person';
import { Telephone } from '../models/Telephone';
import { Address } from '../models/Address';
import { Education } from '../models/Education';

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

  // Education
  public etec: Education = new Education('ETEC Jardim Angela', 'Informática', 2012, 2013);
  public senac: Education = new Education('Centro Universitário Senac', 'Análise e Desenvolvimento de sistemas', 2015, 2017);

  //
  public fabricio: Person = new Person('Fabricio Ferreira do Nascimento', 21,
    'brasileiro', 'IBM', 'Front-End Developer', 'Solteiro', this.tel, this.address, 'f.f.nascimento9@gmail.com', [this.etec, this.senac]);

  constructor() {

  }


  // Each tabs has a specific method
  getPersonData() {
    return this.fabricio;
  }

  getEducation() {
    return this.fabricio.education;
  }

}
