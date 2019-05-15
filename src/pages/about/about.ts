import { Component } from '@angular/core';
import { NavController, App, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  dataResep = [
    {
      id : 0,
      judul : "Harga KTC Proguard UniversalJalu Setang Motor - Red",
      foto : "https://s4.bukalapak.com/img/9231452162/w-300/SHOCK_DBS_ULIR_MERAH.jpg.webp",
      deskripsi : "Rp37.905 Rp150.000-75%",
      favorit : false,
    },
    {
      id : 1,
      judul : "LED Projie double AE dan DE",
      foto : "https://s3.bukalapak.com/img/3174548196/w-300/LAMPU_LED_PROJECTOR_U8_DOUBLE_AE___DE___PROJIE_LED_DAN_AE_CO.jpg.webp",
      deskripsi : "Rp61.750 Rp99.900-38%",
      favorit : false,
    },
    {
      id : 2,
      judul : "Paketan Velg Cross - Paketan Velg Trail Ring 14 -17 Sem",
      foto : "https://s2.bukalapak.com/img/2446284971/w-300/Paketan_Velg_Cross___Paketan_Velg_Trail_Ring_14__17_Matic_Xr.jpg.webp",
      deskripsi : "Rp1.160.999 Rp1.768.550-34%",
      favorit : false,
    },
    {
      id : 3,
      judul : "Saklar Wrna Tombol Khusus Motor Honda Universal Saklar Tombol On/off Warna Biru",
      foto : "https://id-test-11.slatic.net/original/eee623cb609ad25b23c6ff1f9163ae21.jpg_200x200q75.jpg_.webp",
      deskripsi : "Rp50.550 Rp89.900-44%"
    }
  ]

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public app : App) {
    }

    ionViwDidLoad() {
      console.log('ionViewDidLoad AboutPage');
    }

}