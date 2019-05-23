import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  bengkel = [
    {
      nama : "Bengkel Motor 3 Putra" ,
      alamat : "Jl. R. H. Moh. Tohir, Tegal Gundil, Kec. Bogor Utara, Kota Bogor, Jawa Barat 16152",
      tanggal : "23 Mei 2019"
    },
    {
      nama : "Diana motor - Jual beli mobil bekas" ,
      alamat : "Jl. Sindang Barang Pengkolan No.50a, Sindangbarang, Bogor Bar., Kota Bogor, Jawa Barat 16117",
      tanggal : "23 Mei 2019"
    },
    {
      nama : "Bengkel Motor 7RD" ,
      alamat : "Villa Ciomas Indah Blok N-7 Nomor 12, Jalan Garuda Raya, Ciomas Rahayu, Ciomas, Bogor, Jawa Barat 16610",
      tanggal : "23 Mei 2019"
    },
    {
      nama : "Kawasaki JAR" ,
      alamat : "Jl. Batutulis No.91, Batutulis, Kec. Bogor Sel., Kota Bogor, Jawa Barat 16133",
      tanggal : "23 Mei 2019"
    },
    {
      nama : "PT. Murni Motor - Pajajaran" ,
      alamat : "Jl. Pajajaran Indah No.78Q, Baranangsiang, Bogor Tim., Kota Bogor, Jawa Barat 16143",
      tanggal : "23 Mei 2019"
    },
    {
      nama : "Kabayan Klasik Custom" ,
      alamat : "Jl. Kapten Yusuf No.15, Cikaret, Kec. Bogor Sel., Kota Bogor, Jawa Barat 16132",
      tanggal : "23 Mei 2019"
    },
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  } 
  
  ubahFav(data) {
    this.navCtrl.setRoot(HistoryPage)}
  

}
