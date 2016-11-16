import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Person } from '../models/Person';
import { Telephone } from '../models/Telephone';
import { Address } from '../models/Address';
import { Education } from '../models/Education';
import { Work } from '../models/Work';
import { Goals } from '../models/Goals';

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
  public etec: Education = new Education('ETEC Jardim Angela', 'Informática', 2012, 2013, 'assets/imgs/etec-logo.png');
  public senac: Education = new Education('Centro Universitário Senac', 'Análise e Desenvolvimento de sistemas', 2015, 2017, 'assets/imgs/senac-logo.png');

  // Work
  public digimed: Work = new Work('Digimed Instrumentação Analítica', 'Auxiliar de Informática', '03-24-2014', '05-06-2016', false, 'assets/imgs/digimed.jpg');
  public ibm: Work = new Work('IBM Brasil', 'Estágio Lab. Pequisa - Front-End', '05-30-2016', '05-30-2016', true, 'assets/imgs/ibm-logo.png');

  // Goals
  public goals: Goals = new Goals(['Aprender falar Francês', 'Aprender falar Alemão', 'Viajar para o Canadá', 'Imigrar para o Canadá'], ['Ser efetivado no meu emprego atual', 'Iniciar Mestrado ou pós', 'Trabalhar em outro país']);
  //
  public fabricio: Person = new Person('Fabricio Ferreira do Nascimento', 21,
    'brasileiro', 'IBM', 'Front-End Developer', 'Solteiro', this.tel, this.address, 'f.f.nascimento9@gmail.com', [this.etec, this.senac], [this.digimed, this.ibm], this.goals);

  constructor() {

  }


  // Each tabs has a specific method
  getPersonData() {
    return this.fabricio;
  }

  getEducation() {
    return this.fabricio.education;
  }

  getWork() {
    return this.fabricio.work;
  }

  getGoals() {
    return this.fabricio.goals;
  }

}
