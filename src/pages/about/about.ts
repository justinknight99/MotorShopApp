import { Component } from '@angular/core';
import { NavController, App, NavParams } from 'ionic-angular';
import { BelanjaRinciPage } from '../belanja-rinci/belanja-rinci';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  barang = [
    {
      id : 0,
      nama : "Harga KTC Proguard UniversalJalu Setang Motor - Red",
      foto : "https://s4.bukalapak.com/img/9231452162/w-300/SHOCK_DBS_ULIR_MERAH.jpg.webp",
      price : "Rp37.905",
      favorit : true,
    },
    {
      id : 1,
      nama : "LED Projie double AE dan DE",
      foto : "https://s3.bukalapak.com/img/3174548196/w-300/LAMPU_LED_PROJECTOR_U8_DOUBLE_AE___DE___PROJIE_LED_DAN_AE_CO.jpg.webp",
      price : "Rp61.750",
      favorit : true,
    },
    {
      id : 2,
      nama : "Paketan Velg Cross - Paketan Velg Trail Ring 14 -17 Sem",
      foto : "https://s2.bukalapak.com/img/2446284971/w-300/Paketan_Velg_Cross___Paketan_Velg_Trail_Ring_14__17_Matic_Xr.jpg.webp",
      price : "Rp1.160.999",
      favorit : true,
    },
    {
      id : 3,
      nama : "Saklar Wrna Tombol Khusus Motor Honda Universal Saklar Tombol On/off Warna Biru",
      foto : "https://id-test-11.slatic.net/original/eee623cb609ad25b23c6ff1f9163ae21.jpg_200x200q75.jpg_.webp",
      price : "Rp50.550",
      favorit : true
    },
    {
      id : 4,
      nama : "Harga KTC Proguard UniversalJalu Setang Motor - Red",
      foto : "https://s4.bukalapak.com/img/9231452162/w-300/SHOCK_DBS_ULIR_MERAH.jpg.webp",
      price : "Rp37.905",
      favorit : true,
    },
    {
      id : 5,
      nama : "LED Projie double AE dan DE",
      foto : "https://s3.bukalapak.com/img/3174548196/w-300/LAMPU_LED_PROJECTOR_U8_DOUBLE_AE___DE___PROJIE_LED_DAN_AE_CO.jpg.webp",
      price : "Rp61.750",
      favorit : true,
    },
    {
      id : 6,
      nama : "Paketan Velg Cross - Paketan Velg Trail Ring 14 -17 Sem",
      foto : "https://s2.bukalapak.com/img/2446284971/w-300/Paketan_Velg_Cross___Paketan_Velg_Trail_Ring_14__17_Matic_Xr.jpg.webp",
      price : "Rp1.160.999",
      favorit : true,
    },
    {
      id : 7,
      nama : "Saklar Wrna Tombol Khusus Motor Honda Universal Saklar Tombol On/off Warna Biru",
      foto : "https://id-test-11.slatic.net/original/eee623cb609ad25b23c6ff1f9163ae21.jpg_200x200q75.jpg_.webp",
      price : "Rp50.550",
      favorit : true
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

    ubahFav(data){
      this.barang[data.id].favorit = !this.barang[data.id].favorit 
    }

    bukaRinci(data){
      this.app.getRootNav().push(BelanjaRinciPage, data)
    }
}