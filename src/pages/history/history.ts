import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  } 
  
  ubahFav(data) {
    this.navCtrl.setRoot(HistoryPage)}
  

<<<<<<< HEAD
}
=======
}
>>>>>>> 507ece62d2c23d3fce2177e18305f2df42d99f10
