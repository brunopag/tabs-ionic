import { HomePage } from '../home/home';
import { Tab3Page } from '../tab3/tab3';
import { Tab2Page } from '../tab2/tab2';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1:any;
  tab2:any;
  tab3:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = HomePage;
    this.tab2 = Tab2Page
    this.tab3 = Tab3Page
  }



}
