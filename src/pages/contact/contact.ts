import { Component } from '@angular/core';
import { NavController, NavParams, App, AlertController } from 'ionic-angular';
import { MasukPage } from '../masuk/masuk';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public app : App,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }

  keluar(){
    this.app.getRootNav().setRoot(MasukPage)
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Mau keluar?',
      message: 'Data akan hilang',
      buttons: [
        {
          text: 'Batal',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Setuju',
          handler: () => {
            this.keluar()
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

}