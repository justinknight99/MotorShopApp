import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-belanja',
  templateUrl: 'belanja.html',
})
export class BelanjaPage {

  dataBelanja = [
  {
    id: 0,
    nama : "Standar Paddock Universal CBR 150 Ninja R",
    foto : "https://ecs7.tokopedia.net/img/cache/700/product-1/2017/10/19/0/0_9eca619e-31a5-4fe1-a7d8-63ad27241aa3_520_390.jpg",
    price : "Rp228.750",
    favorit : false
  },
  {
    id: 1,
    nama : "Lampu LED Projie motor tornado double AE+DE (Blue+Red)",
    foto : "https://s2.bukalapak.com/img/7834729601/w-1000/Lampu_LED_Projie_Tornado_Double_AE___DE__Red_Blue___Biru_.jpg",
    price : "Rp71.683 Rp99.900-28%",
    favorit : false
  },
  {
    id: 2,
    nama : "Shock DBS Merah Tabung Silver",
    foto : "https://s4.bukalapak.com/img/9231452162/w-1000/SHOCK_DBS_ULIR_MERAH.jpg",
    price : "Rp175.084 Rp250.000-30%",
    favorit : false
  },
  {
    id: 3,
    nama : "spion standar model mio",
    foto : "https://s1.bukalapak.com/img/1263417242/w-1000/Spion_Standar_Yamaha_Model_Jupiter___Spion_.png",
    price : "Rp20.500",
    favorit : false
  },
  {
    id: 4,
    nama : "Saklar Wrna Tombol Khusus Motor Honda Yang Ada Tombol Idlingnya Saklar Tombol On/off Warna Biru",
    foto : "https://id-test-11.slatic.net/original/eee623cb609ad25b23c6ff1f9163ae21.jpg_200x200q75.jpg_.webp",
    price : "Rp55.000 Rp90.000-39%",
    favorit : false
  },
  {
    id: 5,
    nama : "Hanfat Handgrip Daytona black grey 2738 universal mio beat vario jupiter cbr vixion nmax",
    foto : "https://ecs7.tokopedia.net/img/cache/700/product-1/2019/2/26/49146268/49146268_e490cf48-9790-46d0-8936-1fbc9b5952ea_640_640.jpg",
    price : "Rp69.900",
    favorit : false
  },
  ]

  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BelanjaPage');
  }

  tambahFoto(){
    alert("tambahFoto")
  }

  ubahFav(data){
    this.dataBelanja[data].favorit = !this.dataBelanja[data.id].favorit
  }

}
