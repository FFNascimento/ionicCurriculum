import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PersonalInfo } from '../../providers/personal-info';
import { Person } from '../../models/Person';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [PersonalInfo]
})
export class HomePage implements OnInit {
  public title: string;
  public pessoa: Person;
  constructor(public navCtrl: NavController, public personalInfo: PersonalInfo) {

  }

  ngOnInit() {
    this.pessoa = this.personalInfo.getPersonData();
    this.title = "Dados Pessoais";
  }

}
