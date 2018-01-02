import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BeritaPage } from '../berita/berita';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-beritaDanInfo',
  templateUrl: 'beritaDanInfo.html'
})
export class BeritaDanInfoPage {
  tabBerita = BeritaPage;
  tabInfo = InfoPage;

  constructor(public navCtrl: NavController) {
    
  }
}
