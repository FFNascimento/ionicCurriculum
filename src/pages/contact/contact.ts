import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { PersonalInfo } from '../../providers/personal-info';
import { Education } from '../../models/Education';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [PersonalInfo]
})
export class ContactPage {
  public title: string;
  public educationList: Education[];
  constructor(public navCtrl: NavController, public personalInfo: PersonalInfo) {
    this.title = "Escolaridade";
    this.educationList = personalInfo.getEducation();
  }

}
