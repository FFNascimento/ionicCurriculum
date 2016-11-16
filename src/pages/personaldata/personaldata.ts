import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PersonalInfo } from '../../providers/personal-info';
import { Work } from '../../models/Work';Work

/*
  Generated class for the Personaldata page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-personaldata',
  templateUrl: 'personaldata.html',
  providers: [PersonalInfo]
})
export class PersonaldataPage {

  public title: string;
  public workList: Work[];
  constructor(public navCtrl: NavController, public personalInfo: PersonalInfo) {
    this.title = "Dados Profissionais";
    this.workList = personalInfo.getWork();
  }


}
