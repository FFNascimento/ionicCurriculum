import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PersonalInfo } from '../../providers/personal-info';

/*
  Generated class for the Personaldata page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-personaldata',
  templateUrl: 'personaldata.html'
})
export class PersonaldataPage {

  public personalData : any = new PersonalInfo();

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    return this.personalData;
  }

}
