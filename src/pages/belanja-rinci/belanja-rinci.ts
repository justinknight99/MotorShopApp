import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-belanja-rinci',
  templateUrl: 'belanja-rinci.html',
})
export class BelanjaRinciPage {

  data: any

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private sanitizer: DomSanitizer) {
      this.data = this.navParams.data
      this.data.foto = this.sanitizer.bypassSecurityTrustResourceUrl(this.data.foto);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BelanjaRinciPage');
  }

}
