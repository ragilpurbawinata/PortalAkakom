import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-beritaDetail',
  templateUrl: 'beritaDetail.html'
})
export class BeritaDetailPage {
	tanggal: any;
	judul: any;
	isi: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.tanggal = navParams.get("tglParam");
  	this.judul = navParams.get("jdlParam");
  	this.isi = navParams.get("isiParam");
  }

}
