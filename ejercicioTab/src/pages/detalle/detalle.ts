import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {

  personaje: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.personaje = this.navParams.get('personaje');
    console.log(this.personaje);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }

}
