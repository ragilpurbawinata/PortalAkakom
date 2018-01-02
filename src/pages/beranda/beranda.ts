import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'beranda.html'
})
export class BerandaPage {
	tab:string;
  gambar = [1, 2, 3 , 4, 5, 6, 7, 8];
  info:string;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
  	this.tab = "profil";
  }

  gambarFull(indeks){
    switch (indeks) {
      case 1:
        this.info = "Bale Lantip";
        break;
      case 2:
        this.info = "Ruang Presentasi";
        break;
      case 3:
        this.info = "Perpustakaan";
        break;
      case 4:
        this.info = "Gerbang Akakom";
        break;
      case 5:
        this.info = "Halaman Depan Laboratorium";
        break;
      case 6:
        this.info = "Papan Nama Stmik Akakom";
        break;
      case 7:
        this.info = "Ruang Laboratorium";
        break;
      case 8:
        this.info = "Halaman Depan Stmik Akakom";
        break;
      
      default:
        this.info = "STMIK AKAKOM";
        break;
    }
    let toast = this.toastCtrl.create({
      message: this.info,
      duration: 3000,
      position: 'middle',
      showCloseButton: false,
    });
    toast.present();
  }

}
