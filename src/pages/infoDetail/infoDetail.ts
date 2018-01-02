import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-infoDetail',
  templateUrl: 'infoDetail.html'
})
export class InfoDetailPage {
	tanggal: any;
	judul: any;
	isi: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.tanggal = navParams.get("tglParam");
  	this.judul = navParams.get("jdlParam");
  	this.isi = navParams.get("isiParam");
  }

}
