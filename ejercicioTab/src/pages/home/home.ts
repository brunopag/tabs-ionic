import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PERSONAJES } from '../../data/personajes.data';
import { DetallePage } from '../detalle/detalle';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  personajes:any = PERSONAJES;

  constructor(public navCtrl: NavController) {

  }

  verDetalles(personaje:any) {
    console.log(personaje);
    this.navCtrl.push(DetallePage, {'personaje': personaje});
  }

}
