import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { PersonalInfo } from '../../providers/personal-info';
import { Goals } from '../../models/Goals';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [PersonalInfo]
})
export class AboutPage {
  public title: string;
  public objetivos: Goals;
  constructor(public navCtrl: NavController, public personInfo: PersonalInfo) {
    this.title = "Objetivos";
    this.objetivos = personInfo.getGoals();
  }

}
